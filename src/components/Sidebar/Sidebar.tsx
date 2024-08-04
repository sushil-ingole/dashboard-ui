import { AiFillHome } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import { MdInsertChartOutlined } from "react-icons/md";
import { BiWalletAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import "./Sidebar.scss";
import { GiThreeLeaves } from "react-icons/gi";
import "../../assets/styles/theme_variables.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="nav-icons-container">
            <span className="nav-icons main-icon"><GiThreeLeaves /></span>
            <span className="nav-icons home-icon active"><AiFillHome /></span>
            <span className="nav-icons chart-icon"><MdInsertChartOutlined /></span>
            <span className="nav-icons checkboard-icon"><BsClipboard2Check /></span>
            <span className="nav-icons wallet-icon"><BiWalletAlt /></span>
            <span className="nav-icons shoppingbag-icon"><IoBagCheckOutline /></span>
        </div>
    </div>
  )
}

export default Sidebar;
