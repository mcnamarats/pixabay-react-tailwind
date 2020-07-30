import React, { useEffect, useState } from 'react';
import { useSearchContext } from '../context/SearchProvider';

function ImageSearch() {
  const { searchText, setSearchText } = useSearchContext();
  const [text, setText] = useState(searchText);

  useEffect(() => {
    setText(searchText);
  }, [searchText]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex items-center border-b-2 border-purple-500 py-2">
          <input
            autoFocus
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
            value={text}
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
