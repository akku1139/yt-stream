import type { Component } from 'solid-js';
import { YouTubeVideo } from '../lib/youtube';
import queue from '../queue';

export const AddCard: Component = (p: {video: YouTubeVideo}) => {
  return <div class="video-card" onClick={(e) => {queue.add(p.video)}}>
    <img src={p.video.thumbnailURL} />
    <div>{p.video.title}</div>
  </div>;
};

export const SwitchCard: Component = (p: {video: YouTubeVideo, index: Number}) => {
  return <div class="video-card" onClick={(e) => {queue.setIndex(p.index)}}>
    <img src={p.video.thumbnailURL} />
    <div>{p.video.title}</div>
  </div>;
};
