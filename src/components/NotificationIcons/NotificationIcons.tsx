import { CiMail } from "react-icons/ci";
import "./NotificationIcons.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";

const NotificationIcon = () => {
  return (
    <div className="notification-icons">
        <span className="noti-icons"><CiMail/></span>
        <span className="noti-icons"><IoSettingsOutline/></span>
        <span className="noti-icons"><VscBellDot/></span>
        <span className="noti-icons"><CiMail/></span>
    </div>
  )
}

export default NotificationIcon;