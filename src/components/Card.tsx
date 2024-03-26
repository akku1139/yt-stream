import type { Component } from 'solid-js';
import { YouTubeVideo } from '../lib/youtube';
import queue from '../queue';

const Card: Component = (p: {video: YouTubeVideo}) => {
  return <div class="video-card" onClick={(e) => {queue.add(p.video.id)}}>
    <img src={p.video.thumbnailURL} />
    <div>{p.video.title}</div>
  </div>;
};

export default Card;
