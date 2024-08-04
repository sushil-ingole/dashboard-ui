import { CiSearch } from "react-icons/ci";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input"/>
      <span className="search-icon"><CiSearch /></span>
    </div>
  )
}

export default Search;