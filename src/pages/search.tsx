import { apiURL, YouTubeVideo } from "../lib/youtube";
import { AddCard } from "../components/Card";

import { createSignal, For, Index } from 'solid-js';

const SearchPage = () => {
  const [videos, setVideos] = createSignal([]);

  const enterToSearch = (e: KeyboardEvent) => {
    if(e.key === "Enter") { (async (e: KeyboardEvent) => {
      setVideos(await (await fetch(apiURL(`api/v1/search?q=${e.currentTarget.value}`))).json());
    })(e) }
  };

  return <>
    <input type="text" placeholder="Search" onKeyDown={enterToSearch} />
    <ul>
      <For each={videos()}>{(video, i) => // Indexだとなんか上手く行かなかった
        <li><AddCard video={new YouTubeVideo(video)} /></li>
      }</For>
    </ul>
  </>;
};

export default SearchPage;
