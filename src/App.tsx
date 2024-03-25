import type { Component } from 'solid-js';
import PlayerPage from './pages/player';
import QueuePage from './pages/queue';
import SearchPage from './pages/search';

const App: Component = () => {
  return (<>
    <div>
      <input type="radio" id="page-search" name="pages" checked />
      <label class="page-label" for="page-search">search</label>

      <input type="radio" id="page-queue" name="pages" checked />
      <label class="page-label" for="page-queue">queue</label>

      <input type="radio" id="page-player" name="pages" checked />
      <label class="page-label" for="page-player">player</label>
    </div>
    <div>
      <SearchPage class="page-content" />
      <QueuePage class="page-content" />
      <PlayerPage class="page-content" />
    </div>
  </>);
};

export default App;
