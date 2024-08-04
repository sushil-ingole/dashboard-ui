import { BiDish, BiTargetLock } from "react-icons/bi";
import Goal from "./Goal/Goal";
import "./GoalsMenu.scss";
import { GiHamburger } from "react-icons/gi";

const GoalsMenu = () => {
  return (
    <div className="goals-menu">      
        <Goal icon={<BiTargetLock/>} iconName="Goals"/>
        <Goal icon={<GiHamburger/>} iconName="Popular Dishes"/>
        <Goal icon={<BiDish/>} iconName="Menus"/>
    </div>
  )
}

export default GoalsMenu;
