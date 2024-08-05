import { CiMail } from "react-icons/ci";
import "./NotificationIcons.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

const NotificationIcon = () => {
  return (
    <div className="notification-icons">
        <span className="noti-icons"><CiMail/></span>
        <span className="noti-icons"><IoSettingsOutline/></span>
        <span className="noti-icons"><VscBellDot/></span>
        <span className="noti-icons"><CgProfile/></span>
    </div>
  )
}

export default NotificationIcon;