import { YouTubeVideo } from '../lib/youtube';
import queue from '../queue';
import { createSignal, For, Index } from 'solid-js';

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
