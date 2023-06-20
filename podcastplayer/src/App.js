import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Shows from "./Shows";
import Search from "./Search";
import Episodes from "./Episodes";
import AudioPlayer from "./AudioPlayer";
import api from "./api";
import data from "./data";

const App = () => {
  const [shows, setShows] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [previouslyPlayedShow, setPreviouslyPlayedShow] = useState(null);
  const [previouslyPlayedEpisode, setPreviouslyPlayedEpisode] = useState(null);
  const [
    episodesListenedToAllTheWayThrough,
    setEpisodesListenedToAllTheWayThrough,
  ] = useState([]);
  const [playbackPosition, setPlaybackPosition] = useState(null);

  useEffect(() => {
    // Get shows from server
    fetch("/shows")
      .then((response) => response.json())
      .then((shows) => setShows(shows));

    // Get episodes from server
    fetch("/episodes")
      .then((response) => response.json())
      .then((episodes) => setEpisodes(episodes));
  }, []);

  // When  user clicks a show, set previously played show and episode
  const handleShowClick = (show) => {
    setPreviouslyPlayedShow(show);
    setPreviouslyPlayedEpisode(null);
  };

  // When user plays episode, set playback position
  const handleEpisodePlay = (episode) => {
    setPlaybackPosition(episode.currentTime);
  };

  // When user pauses episode, save playback position
  const handleEpisodePause = (episode) => {
    setPlaybackPositionForEpisode(
      episode.show,
      episode.id,
      episode.currentTime
    );
  };

  // When user rewinds episode, rewind playback position
  const handleEpisodeRewind = (episode, seconds) => {
    const newPlaybackPosition = episode.currentTime - seconds;
    setPlaybackPosition(newPlaybackPosition);
    setPlaybackPositionForEpisode(
      episode.show,
      episode.id,
      newPlaybackPosition
    );
  };

  // When user fast forwards episode, fast forward playback position
  const handleEpisodeFastForward = (episode, seconds) => {
    const newPlaybackPosition = episode.currentTime + seconds;
    setPlaybackPosition(newPlaybackPosition);
    setPlaybackPositionForEpisode(
      episode.show,
      episode.id,
      newPlaybackPosition
    );
  };

  // When user resets their progress, clear playback position
  const handleResetProgress = () => {
    setPlaybackPosition(null);
  };

  return (
    <div>
      <h1>Podcasts</h1>
      <Shows shows={shows} handleShowClick={handleShowClick} />
      <Search episodes={episodes} />
      <Episodes
        episodes={episodes}
        previouslyPlayedShow={previouslyPlayedShow}
        previouslyPlayedEpisode={previouslyPlayedEpisode}
        handleEpisodePlay={handleEpisodePlay}
        handleEpisodePause={handleEpisodePause}
        handleEpisodeRewind={handleEpisodeRewind}
        handleEpisodeFastForward={handleEpisodeFastForward}
        handleResetProgress={handleResetProgress}
      />
      <AudioPlayer
        playbackPosition={playbackPosition}
        episodesListenedToAllTheWayThrough={episodesListenedToAllTheWayThrough}
      />
    </div>
  );
};

export default App;
