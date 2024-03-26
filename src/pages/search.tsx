import { setVideoID } from "../queue";

const SearchPage = () => {
  return <>
    <input type="text" placeholder="Search" />
    <button onClick={(e: Event) => { setVideoID("4gql9o4oiwU") }}></button>
  </>;
};

export default SearchPage;
