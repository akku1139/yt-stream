import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  readonly list: () => Array<YouTubeVideo>;
  readonly setList: (a: Array<YouTubeVideo>) => void;

  readonly index: () => Number;
  readonly setIndex: (n: Number) => void;

  // add() -> nowVideo()
  // setNowVideoID() -> nowVideo()
  private readonly nowVideoID: () => String;
  readonly setVideoID: (id: String) => void;
  readonly nowVideo: () => YouTubeVideo ;
  private setVideo: (v: YouTubeVideo) => void;

  constructor() {
    [this.index, this.setIndex] = createSignal<Number>(0);
    [this.list, this.setList] = createSignal<YouTubeVideo>([]);
    [this.nowVideoID, this.setVideoID] = createSignal<String>();
    [this.nowVideo, this.setVideo] = createSignal<YouTubeVideo>();

    {
      this.add("JBTK0Wssvzc"); // 初回にundefinedなる暫定措置
      setVideoID("JBTK0Wssvzc");// 曲追加されたときにPlayerを描画してあげれば解決
      const t = new YouTubeVideo();
      t.id = "JBTK0Wssvzc";
      t.title = "【アコーディオン鬼演奏】コンギョ　攻撃戦だ";
      t.thumbnailURL = "https://i.ytimg.com/vi/JBTK0Wssvzc/sddefault.jpg"
      setVideo(t);
    }

    createEffect(() => {
      this.setVideoID(this.index());
    });

    createEffect(() => { (async () => {
      this.setVideo(await YouTubeVideo.new(this.nowVideoID()));
    })() });
  }

  add(id: String) {
    this.setList((l) => l.push(id));
  }

  next() {
    this.setIndex(this.index() + 1);
  }
}

const queue = new Queue();

export default queue;
