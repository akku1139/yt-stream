import queue from "../queue";

const PlayerPage = () => {
  return <>
    <img src={queue.nowVideo().thumbnailURL} class="big-thumbnail" />
    <div>{queue.nowVideo().title}</div>
  </>;
};

export default PlayerPage;
