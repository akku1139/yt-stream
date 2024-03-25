export class YouTubeVideo {
  id: String;
  thumbnailURL: String;

  constructor(id: String) {
    this.id = id;
    this.thumbnailURL = `https://i.ytimg.com/vi/${id}/hq720.jpg`;
  }
}
