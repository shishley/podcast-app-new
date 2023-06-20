// Import the API functions from api.js
import { getPreviews, getGenre, getShow } from "./api";

// Fetch the data from the API
const previews = await getPreviews();
const genres = await Promise.all(
  previews.map((preview) => getGenre(preview.genreId))
);
const shows = await Promise.all(
  previews.map((preview) => getShow(preview.id))
);

// Store the data in a global variable
const data = {
  previews,
  genres,
  shows,
};

// Export the data
export default data;
