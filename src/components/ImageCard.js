import React, { useRef, useState } from 'react';
import { useSearchContext } from '../context/SearchProvider';
import useIntersectionObserver from '../hooks/use-inersection-observer';

function ImageCard({ image }) {
  const { setSearchText } = useSearchContext();
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const imageUrl = image.webformatURL.replace('_640', '_340');
  const tags = image.tags.split(',');

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-800">
      <div className="relative overflow-hidden" ref={ref}>
        {isVisible && (
          <a
            href={image.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageUrl}
              alt={image.tags}
              className="aboslute top-0 h-64 w-full object-cover transition duration-700 ease-out transform hover:scale-150"
            />
          </a>
        )}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-purple-500 mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views.toLocaleString()}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads.toLocaleString()}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 pb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full bg-gray-200 px-2 text-xxs text-gray-700 font-semibold mr-2 cursor-pointer hover:bg-gray-500"
            onClick={(e) => setSearchText(e.target.innerHTML)}
          >
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
