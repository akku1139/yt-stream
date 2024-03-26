import type { Component } from 'solid-js';
import PlayerPage from './pages/player';
import QueuePage from './pages/queue';
import SearchPage from './pages/search';

import "./main.css";
import Player from './components/Player';
import queue from './queue';

const App: Component = () => {

  queue.add("JBTK0Wssvzc");
  queue.add("qhXrye7zkwY");
  queue.add("seMsAQQexfM");

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

    <div id="player">
      <Player />
    </div>
  </>);
};

export default App;
