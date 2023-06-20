import React from "react";

const Episode = ({
  title,
  show,
  duration,
  audioUrl,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        From the show: {show}
      </p>
      <p>
        Duration: {duration}
      </p>
      <audio
        controls
        src={audioUrl}
      />
    </div>
  );
};

export default Episode;
