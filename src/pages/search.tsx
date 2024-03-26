import { apiURL } from "../lib/youtube";
import queue from "../queue";

const SearchPage = () => {
  const enterToSearch = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      await fetch(apiURL(`api/v1/search?q=`))
    }
  };

  return <>
    <input type="text" placeholder="Search" onKeyDown={enterToSearch} />
  </>;
};

export default SearchPage;
