import { apiURL, YouTubeVideo } from "../lib/youtube";
import queue from "../queue";

import { createSignal, Index } from 'solid-js';

const SearchPage = () => {
  const [videos, setVideos] = createSignal([]);

  const enterToSearch = (e: KeyboardEvent) => {
    if(e.key === "Enter") { ((e: KeyboardEvent) => {
      const r = await fetch(apiURL(`api/v1/search?q=${e.currentTarget.value}`));
      const v = await r.json();
      setVideos(v);
    })(e) }
  };

  return <>
    <input type="text" placeholder="Search" onKeyDown={enterToSearch} />
    <ul>
      <Index each={videos()}>{(video, i) => {
        <li><Card video={YouTubeVideo.fromIV(video())} /></li>
      }}</Index>
    </ul>
  </>;
};

export default SearchPage;
