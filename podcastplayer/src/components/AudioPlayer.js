import React, { useState } from "react";
import ReactDOM from "react-dom";

const AudioPlayer = ({
  playbackPosition,
  episodesListenedToAllTheWayThrough,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(playbackPosition);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleRewind = (seconds) => {
    const newCurrentTime = currentTime - seconds;
    if (newCurrentTime < 0) {
      newCurrentTime = 0;
    }
    setCurrentTime(newCurrentTime);
  };

  const handleFastForward = (seconds) => {
    const newCurrentTime = currentTime + seconds;
    if (newCurrentTime > episodesListenedToAllTheWayThrough[0].duration) {
      newCurrentTime = episodesListenedToAllTheWayThrough[0].duration;
    }
    setCurrentTime(newCurrentTime);
  };

  return (
    <div>
      <audio
        controls
        autoPlay={isPlaying}
        src={episodesListenedToAllTheWayThrough[0].audioUrl}
        currentTime={currentTime}
        onPlay={handlePlay}
        onPause={handlePause}
        onRewind={handleRewind}
        onFastForward={handleFastForward}
      />
    </div>
  );
};

export default AudioPlayer;
