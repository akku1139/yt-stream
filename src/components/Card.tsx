import type { Component } from 'solid-js';
import { YouTubeVideo } from '../lib/youtube';
import queue from '../queue';

export const AddCard: Component = (p: {video: YouTubeVideo}) => {
  return <a class="video-card" onClick={(e: PointerEvent) => {
    console.log(e);
    queue.add(p.video);
  }}>
    <img src={p.video.thumbnailURL} />
    <div>{p.video.title}</div>
  </a>;
};

export const SwitchCard: Component = (p: {video: YouTubeVideo, index: Number}) => {
  return <a class="video-card" onClick={(e: PointerEvent) => {queue.setIndex(p.index)}}>
    <img src={p.video.thumbnailURL} />
    <div>{p.video.title}</div>
  </a>;
};
