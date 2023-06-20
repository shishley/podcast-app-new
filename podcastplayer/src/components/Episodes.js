import React, { useState } from "react";
import ReactDOM from "react-dom";
import Episode from "./Episode";

const Episodes = ({ episodes }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [episodePlaybackPosition, setEpisodePlaybackPosition] = useState(null);

  const handlePlay = (episodeId) => {
    const episode = episodes.find(episode => episode.id === episodeId);
    if (episode) {
      setIsPlaying(true);
      setEpisodePlaybackPosition(episode.currentTime);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleRewind = (seconds) => {
    const newCurrentTime = episodePlaybackPosition - seconds;
    if (newCurrentTime < 0) {
      newCurrentTime = 0;
    }
    setEpisodePlaybackPosition(newCurrentTime);
  };

  const handleFastForward = (seconds) => {
    const newCurrentTime = episodePlaybackPosition + seconds;
    if (newCurrentTime > episodes[0].duration) {
      newCurrentTime = episodes[0].duration;
    }
    setEpisodePlaybackPosition(newCurrentTime);
  };

  return (
    <div>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Episode
              key={episode.id}
              episode={episode}
              isPlaying={isPlaying}
              episodePlaybackPosition={episodePlaybackPosition}
              onPlay={handlePlay}
              onPause={handlePause}
              onRewind={handleRewind}
              onFastForward={handleFastForward}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;

