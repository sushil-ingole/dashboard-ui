import { RiArrowUpSFill } from "react-icons/ri";
import "./NetProfit.scss";

const NetProfit = () => {
  return (
    <div className="net-profit">
        <span className="net-profit-title">NetProfit</span>
        <span className="net-profit-value">$ 6759.25</span>
        <span className="net-profit-percent">
        <span className="arrow"><RiArrowUpSFill/></span>
            3%
        </span>
        <div className="net-profit-goal">
            <div className="net-profit-pie-chart" style={{ '--progress': '270deg' } as React.CSSProperties}>
                <div className="start-cap"></div>
            </div>
            <div className="goal-container">
                <span className="goal-percent">70%</span>
                <span className="goal-text">Goal Completed</span>
            </div>
            <span className="net-profit-pie-chart-label">*The values here has been rounded off.</span>
        </div>
    </div>
  )
}

export default NetProfit;
