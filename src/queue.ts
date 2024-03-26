import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

class Queue {
  readonly list: Array<YouTubeVideo>; // この辺もリアクティブにしてあげないと動的に更新できないかもしれない

  readonly index: () => Number;
  readonly setIndex: (Number) => void;

  // add() -> nowVideo()
  // setNowVideoID() -> nowVideo()
  private readonly nowVideoID: () => String;
  readonly setVideoID: (String) => void;
  readonly nowVideo: () => YouTubeVideo ;
  private setVideo: (YouTubeVideo) => void;

  constructor() {
    this.list = [];
    const [index, setIndex] = createSignal<Number>(0);
    this.index = index;
    this.setIndex = setIndex;

    const [nowVideoID, setVideoID] = createSignal<String>();
    this.nowVideoID = nowVideoID;
    this.setVideoID = setVideoID;

    const [nowVideo, setVideo] = createSignal<YouTubeVideo>();
    this.nowVideo = nowVideo;
    this.setVideo = setVideo;

    {
      this.add("JBTK0Wssvzc"); // 初回にundefinedなる暫定措置
      setVideoID("JBTK0Wssvzc");// 曲追加されたときにPlayerを描画してあげれば解決
      const t = new YouTubeVideo();
      t.id = "JBTK0Wssvzc";
      t.title = "【アコーディオン鬼演奏】コンギョ　攻撃戦だ";
      t.thumbnailURL = "https://i.ytimg.com/vi/JBTK0Wssvzc/sddefault.jpg"
      setVideo(t);
    }

    createEffect(() => { (async () => {
      this.setVideo(await YouTubeVideo.new(this.nowVideoID()));
    })() });
  }

  add(id: String) {
    this.list.push(id);
  }

  next() {
    this.setIndex(this.index() + 1);
    // createEffect ?
    this.setVideoID(this.list[this.index()]);
  }
}

const queue = new Queue();

export default queue;
