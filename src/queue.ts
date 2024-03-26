import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  list: Array<YouTubeVideo>;
  index: Number;
  nowVideoID;
  setVideoID;

  constructor() {
    this.index = 0;
    const [nowVideoID, setVideoID] = createSignal();
    this.nowVideoID = nowVideoID;
    this.setVideoID = setVideoID;
  }

  add(id: String) {
    list.add(id);
  }

  next() {
    this.index ++; // createEffect
    this.setVideoID(this.index);
  }
}

export const queue = new Queue();
