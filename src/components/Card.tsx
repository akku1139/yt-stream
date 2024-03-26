import type { Component } from 'solid-js';
import { YouTubeVideo } from '../lib/youtube';

const Card: Component = (p: {v: YouTubeVideo}) => {
  return <div class="">
    <img src={p.v.thumbnailURL} />

  </div>;
};

export default Card;
