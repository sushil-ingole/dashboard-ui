import { ReactNode } from "react";
import "./CardDetails.scss";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

interface ICardDetails {
    title: string;
    total: string;
    percent: string;
    profit: boolean;
    icon: ReactNode
}

const CardDetails = ({title, total, percent, profit, icon}: ICardDetails) => {
  return (
    <div className="card-details">
        <div className="card-header">
            <span className="icon">{icon}</span>
            <span className="card-title">{title}</span>
        </div>
        <div className="card-total">{total}</div>
        <div className={`card-percent ${profit ? 'profit' : ''}`}>
            <span className="arrow">{profit ? <RiArrowUpSFill/> : <RiArrowDownSFill/>}</span>
            {percent}%</div>
    </div>
  )
}

export default CardDetails;