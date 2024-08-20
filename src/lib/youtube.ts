export const apiURL = (path: String) => {
  //return `https://invidious.jing.rocks/${path}`;
  return `https://invidious.perennialte.ch/${path}`;
};

export type IVVideo =   {
  title: String,
  videoId: String,
  videoThumbnails: Array<{
    quality: String,
    url: String,
    width: Number,
    height: Number,
  }>,

  lengthSeconds: Number,
  viewCount: Number,

  author: String,
  authorId: String,
  authorUrl: String,

  published: Number,
  publishedText: String,
  description: String,
  descriptionHtml: String,

  liveNow: Boolean,
  paid: Boolean,
  premium: Boolean,
};

export class YouTubeVideo {
  id: String;
  thumbnailURL: String;
  title: String;

  constructor(v: IVVideo) {
    this.id = v.videoId;
    this.thumbnailURL = `https://i.ytimg.com/vi/${v.videoId}/sddefault.jpg`;
    this.title = v.title;
  }
}
