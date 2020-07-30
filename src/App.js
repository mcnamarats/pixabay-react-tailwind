import React, { useState, useEffect } from 'react';
import { queryCache, usePaginatedQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import Container from './components/Container';
import ImageSearch from './components/ImageSearch';
import ImageList from './components/ImageList';
import { useSearchContext } from './context/SearchProvider';
import fetchImages from './api';
import ImageNav from './components/ImageNav';

const PER_PAGE = 99;

const numPages = (itemCount) => Math.ceil(itemCount / PER_PAGE);

function App() {
  const { searchText } = useSearchContext();
  const [page, setPage] = useState(1);

  // set page to 1 when searchText changes
  useEffect(() => setPage(1), [searchText]);

  // will get fired when either seatchText or page changes
  const { isLoading, resolvedData, latestData } = usePaginatedQuery(
    ['images', { searchText, page, perPage: PER_PAGE }],
    fetchImages
  );

  // prefetch next page
  useEffect(() => {
    if (page + 1 < numPages(latestData?.total)) {
      queryCache.prefetchQuery(
        ['images', { searchText, page: page + 1 }],
        fetchImages
      );
    }
  }, [latestData, page, searchText]);

  return (
    <>
      <Container>
        <ImageSearch />
        {!isLoading && (
          <>
            <ImageNav
              page={page}
              totalPages={numPages(resolvedData.total)}
              onNext={() => setPage(page + 1)}
              onPrev={() => setPage(page - 1)}
            />
            <ImageList images={resolvedData.hits} />
          </>
        )}
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
