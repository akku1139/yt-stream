export const apiURL = (path: String) => {
  return `https://invidious.jing.rocks/${path}`;
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

  public static async new(id: String): Promise<YouTubeVideo> {
    const t = new YouTubeVideo();

    t.id = id;
    t.thumbnailURL = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

    const videoInfo = await (await fetch(apiURL(`api/v1/videos/${id}`))).json();

    t.title = videoInfo.title;

    return t;
  }

  public static fromIV(v: IVVideo): YouTubeVideo {
    const t = new YouTubeVideo();

    t.id = v.videoId;
    t.thumbnailURL = `https://i.ytimg.com/vi/${v.videoId}/sddefault.jpg`;
    t.title = v.title;

    return t;
  }
}
