import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  list: Array<YouTubeVideo>;
  index: Number;

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

    createEffect(() => {
      this.setVideo(new YouTubeVideo(this.nowVideoID()));
    });
  }

  add(id: String) {
    this.list.push(id);
  }

  next() {
    this.index ++; // createEffect
    this.setVideoID(this.index);
  }
}

const queue = new Queue();

export default queue;
