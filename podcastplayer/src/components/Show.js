import React from "react";

const Show = ({
  title,
  genre,
  episodes,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Genre: {genre}
      </p>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Show;
