import { ReactNode } from "react";
import { MdNavigateNext } from "react-icons/md";
import "./Goal.scss";

interface IGoal {
    icon: ReactNode;
    iconName: string;
}

const Goal = ({icon, iconName}: IGoal) => {
  return (
    <div className="goal-container">
        <div className="goal-header">
            <span className="goal-icon">{icon}</span>
            <span className="goal-name">{iconName}</span>
        </div>
        <span className="goal-navigate"><MdNavigateNext/></span>
    </div>
  )
}

export default Goal;