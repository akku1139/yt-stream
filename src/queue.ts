import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  readonly list: Array<YouTubeVideo>; // この辺もリアクティブにしてあげないと動的に更新できないかもしれない
  readonly index: Number;

  // add() -> nowVideo()
  // setNowVideoID() -> nowVideo()
  private nowVideoID;
  setVideoID;
  nowVideo;
  private setVideo;

  constructor() {
    this.list = [];
    this.index = 0;

    const [nowVideoID, setVideoID] = createSignal<String>();
    this.nowVideoID = nowVideoID;
    this.setVideoID = setVideoID;

    const [nowVideo, setVideo] = createSignal<YouTubeVideo>();
    this.nowVideo = nowVideo;
    this.setVideo = setVideo;

    this.add("JBTK0Wssvzc"); // 初回にundefinedなる暫定措置
    setVideoID("JBTK0Wssvzc");

    createEffect(() => { (async () => {
      this.setVideo(await YouTubeVideo.new(this.nowVideoID()));
    })() });
  }

  add(id: String) {
    this.list.push(id);
  }

  next() {
    this.index ++; // createEffect ?
    this.setVideoID(this.list[this.index]);
  }
}

const queue = new Queue();

export default queue;
