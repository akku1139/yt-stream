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

    {
      const t = new YouTubeVideo();
      t.id = "JBTK0Wssvzc";
      t.title = "【アコーディオン鬼演奏】コンギョ　攻撃戦だ";
      t.thumbnailURL = "https://i.ytimg.com/vi/JBTK0Wssvzc/sddefault.jpg"
      this.setVideo(t);
      this.add(t);
    }

    createEffect(() => { (async () => {
      this.setVideo(this.list()[this.index()]);
    })() });
  }

  add(v: YouTubeVideo) {
    this.setList((l) => {
      l.push(v);
      return l;
    });
  }

  next() {
    this.setIndex(i => i + 1);
  }
}

const queue = new Queue();

export default queue;
