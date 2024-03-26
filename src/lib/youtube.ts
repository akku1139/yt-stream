export class YouTubeVideo {
  readonly id: String;
  readonly thumbnailURL: String;
  readonly title: String;

  static public async new(id: String) {
    this.id = id;
    this.thumbnailURL = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

    const videoInfo = await (await fetch("https://music.youtube.com/youtubei/v1/next?prettyPrint=false", {
      body: JSON.stringify({
        context: {
          client: {
            clientName: "WEB",
            clientVersion: "2.20240325.01.00",
          },
        },
        videoId: id,
      }),
      method: "POST",
    })).json();

    this.title = videoInfo.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.title.runs[0].text;
  }
}
