export default async function fetchImages(
  key,
  { searchText = '', page = 1, perPage = 15 }
) {
  const URL = `https://pixabay.com/api/?key=${
    process.env.REACT_APP_API_KEY
  }&q=${encodeURIComponent(
    searchText
  )}&image_type=photo&page=${page}&per_page=${perPage}`;

  const res = await fetch(URL);
  return res.json();
}
