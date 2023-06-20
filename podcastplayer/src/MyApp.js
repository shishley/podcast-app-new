import React from "react";
import { getPreviews } from "./api";
import data from "./data";

const apps = () => {
  const [previews, setPreviews] = React.useState([]);

  // Fetch the data from the API
  async function fetchPreviews() {
    const previews = await api.getPreviews();
    setPreviews(previews);
  }

  // Render the previews
  return (
    <div>
      <h1>Podcasts</h1>
      <ul>
        {previews.map((preview) => (
          <li key={preview.id}>{preview.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Run the fetchPreviews function when the component mounts
React.useEffect(() => {
  fetchPreviews();
}, []);

export default apps;
