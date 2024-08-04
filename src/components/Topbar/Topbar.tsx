import NotificationIcon from "../NotificationIcons/NotificationIcons";
import Search from "../Search/Search";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbar-search-container">
            <Search/>
        </div>
        <div className="topbar-search-container">
            <NotificationIcon/>
        </div>
    </div>
  )
}

export default Topbar;