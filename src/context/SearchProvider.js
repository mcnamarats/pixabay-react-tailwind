/**
 * avoids prop drilling into the ImageCard component that can change the
 * searchText when clicking on an images tag
 */
import React, { createContext, useState, useContext, useMemo } from 'react';

const SearchContext = createContext();

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('SearchContext must be used with SearchProvider');
  }
  return context;
}

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  // avoids triggering re-render if the searchText has not changed
  const value = useMemo(() => ({ searchText, setSearchText }), [searchText]);
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
