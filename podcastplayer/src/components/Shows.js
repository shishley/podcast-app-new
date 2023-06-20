import React, { useState } from "react";
import ReactDOM from "react-dom";
import Show from "./Show";

const Shows = ({ shows }) => {
  const [previousShow, setPreviousShow] = useState(null);
  const [previousEpisode, setPreviousEpisode] = useState(null);

  const handleShowClick = (showId) => {
    setPreviousShow(showId);
  };

  const handleEpisodeClick = (episodeId) => {
    setPreviousShow(null);
    setPreviousEpisode(episodeId);
  };

  return (
    <div>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Show
              key={show.id}
              title={show.title}
              genre={show.genre}
              episodes={show.episodes}
              onShowClick={handleShowClick}
              onEpisodeClick={handleEpisodeClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shows;
