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

  private queueUpdate: Boolean;

  constructor() {
    [this.index, this.setIndex] = createSignal<Number>(0);
    [this.list, this.setList] = createSignal<YouTubeVideo>([], { equals: (prev, next) => {
      return !this.queueUpdate;
    }});
    [this.nowVideo, this.setVideo] = createSignal<YouTubeVideo>();

    this.queueUpdate = true;

    createEffect(() => { (async () => {
      this.queueUpdate = false;
      this.setVideo(this.list()[this.index()]);
    })() });
  }

  add(v: YouTubeVideo) {
    this.queueUpdate = true;
    this.setList((l) => {
      l.push(v);
      return l;
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
