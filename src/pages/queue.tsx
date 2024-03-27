import queue from '../queue';

import { For } from 'solid-js';
import SwitchCard from '../components/Card';

const QueuePage = () => {
  return <>
    <ol>
      <For each={queue.list()}>{(video, i) =>
        <li><SwitchCard video={video} /></li>
      }</For>
    </ol>
  </>;
};

export default QueuePage;
