import { createSignal } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

export const [nowVideo, setVideo] = createSignal<YouTubeVideo>();

let queue: Array<YouTubeVideo>;
