import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

export const [nowVideoID, setVideoID] = createSignal();

let queue: Array<YouTubeVideo>;
