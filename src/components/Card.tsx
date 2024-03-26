import type { Component } from 'solid-js';
import { YouTubeVideo } from '../lib/youtube';
import queue from '../queue';

const Card: Component = (p: {v: YouTubeVideo}) => {
  return <div class="video-card" onClick={(e) => {queue.add(p.v.id)}}>
    <img src={p.v.thumbnailURL} />
    <div>{p.v.title}</div>
  </div>;
};

export default Card;
