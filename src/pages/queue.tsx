import { YouTubeVideo } from '../lib/youtube';
import queue from '../queue';

import { For } from 'solid-js';
import Card from '../components/Card';

const QueuePage = () => {
  return <>
    <ol>
      <For each={queue.list()}>{(video, i) =>
        <li><Card video={video} /></li>
      }</For>
    </ol>
  </>;
};

export default QueuePage;
