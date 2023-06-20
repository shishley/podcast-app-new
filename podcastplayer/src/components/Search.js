import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Episode } from "./Episode";

const Search = () => {
  const [query, setQuery] = useState("");
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Get episodes from the server that match query
    fetch(`/search?query=${query}`)
      .then(response => response.json())
      .then(episodes => setEpisodes(episodes));
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for episodes..."
        onChange={(event) => setQuery(event.target.value)}
      />
      {episodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default Search;
