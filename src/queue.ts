import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  list: Array<YouTubeVideo>;
  index: Number;

  // setNowVideoID() -> nowVideo
  private nowVideoID;
  setVideoID;
  nowVideo;
  private setVideo;

  constructor() {
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
    list.add(id);
  }

  next() {
    this.index ++; // createEffect
    this.setVideoID(this.index);
  }
}

export const queue = new Queue();
