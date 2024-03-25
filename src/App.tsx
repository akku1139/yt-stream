import type { Component } from 'solid-js';
import PlayerPage from './pages/player';
import QueuePage from './pages/queue';
import SearchPage from './pages/search';

const App: Component = () => {
  return (<>
    <div></div>
    <div>
      <SearchPage class="page-content" />
      <QueuePage class="page-content" />
      <PlayerPage class="page-content" />
    </div>
  </>);
};

export default App;
