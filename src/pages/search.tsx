import queue from "../queue";

const SearchPage = () => {
  return <>
    <input type="text" placeholder="Search" />
    <button onClick={(e: Event) => { queue.setVideoID("4gql9o4oiwU") }}>別の</button>
  </>;
};

export default SearchPage;
