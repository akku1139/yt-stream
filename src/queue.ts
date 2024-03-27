import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  readonly list: () => Array<YouTubeVideo>;
  readonly setList: (a: Array<YouTubeVideo>) => void;

  readonly index: () => Number;
  readonly setIndex: (n: Number) => void;

  // add() -> nowVideo()
  readonly nowVideo: () => YouTubeVideo ;
  private readonly setVideo: (v: YouTubeVideo) => void;

  constructor() {
    [this.index, this.setIndex] = createSignal<Number>(0);
    [this.list, this.setList] = createSignal<YouTubeVideo>([]);
    [this.nowVideo, this.setVideo] = createSignal<YouTubeVideo>();

    createEffect(() => { (async () => {
      this.setVideo(this.list()[this.index()]);
    })() });
  }

  add(v: YouTubeVideo) {
    this.setList((l) => {
      l.push(v);
      return [...l];
    });
    console.debug(this);
  }

  next() {
    this.setIndex(i => i + 1);
    console.debug(this);
  }
}

const queue = new Queue();

export default queue;
