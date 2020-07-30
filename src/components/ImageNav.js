import React from 'react';

function ImageNav({ page, totalPages, onNext, onPrev }) {
  return (
    <div className="flex justify-between">
      {page < totalPages ? (
        <button
          className="mb-5 text-purple-500 hover:text-purple-700"
          onClick={onNext}
        >
          Next
        </button>
      ) : (
        <div></div>
      )}
      <div>{`Page ${page} of ${totalPages}`}</div>
      {page !== 1 ? (
        <button
          className="mb-5 text-purple-500 hover:text-purple-700"
          onClick={onPrev}
        >
          Prev
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ImageNav;
