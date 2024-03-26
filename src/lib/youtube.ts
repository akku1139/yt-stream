export const apiURL = (path: String) => {
  return `https://invidious.jing.rocks/${path}`;
};

export class YouTubeVideo {
  readonly id: String;
  readonly thumbnailURL: String;
  readonly title: String;

  static public async new(id: String) {
    this.id = id;
    this.thumbnailURL = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

    const videoInfo = await (await fetch(apiURL(`api/v1/videos/${id}`))).json();

    this.title = videoInfo.title;
  }
}
