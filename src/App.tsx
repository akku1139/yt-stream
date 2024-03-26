import type { Component } from 'solid-js';
import PlayerPage from './pages/player';
import QueuePage from './pages/queue';
import SearchPage from './pages/search';

import "./main.css";
import Player from './components/Player';
import { setVideo } from './queue';
import { YouTubeVideo } from './lib/youtube';

const App: Component = () => {

  setVideo(new YouTubeVideo("JBTK0Wssvzc"));

  return (<>
    <div id="page-selector" >
      <input type="radio" id="page-search" name="pages" checked />
      <label class="page-label" for="page-search">search</label>

      <input type="radio" id="page-queue" name="pages" />
      <label class="page-label" for="page-queue">queue</label>

      <input type="radio" id="page-player" name="pages" />
      <label class="page-label" for="page-player">player</label>

      <div id="page">
        <div class="page-content" id="page-search-content">
          <SearchPage />
        </div>
        <div class="page-content" id="page-queue-content">
          <QueuePage />
        </div>
        <div class="page-content" id="page-player-content">
          <PlayerPage />
        </div>
      </div>
    </div>

    <Player />
  </>);
};

export default App;
