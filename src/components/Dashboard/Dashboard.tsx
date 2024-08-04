import ActivityGraph from "../ActivityGraph/ActivityGraph";
import CustomersFeedback from "../CustomersFeedback/CustomersFeedback";
import GoalsMenu from "../GoalsMenu/GoalsMenu";
import NetProfit from "../NetProfit/NetProfit";
import RecentOrders from "../RecentOrders/RecentOrders";
import StatsCard from "../StatsCard/StatsCard";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-contaniner">
        <div className="dashboard-cards dashboard-statscard-container">
            <StatsCard/>
        </div>
        <div className="dashboard-cards dashboard-netprofit-container">
            <NetProfit/>
        </div>
        <div className="dashboard-cards dashboard-activitygraph-container">
            <ActivityGraph/>
        </div>
        <div className="dashboard-cards dashboard-goalsmenu-container">
            <GoalsMenu/>
        </div>
        <div className="dashboard-cards dashboard-recentorders-container">
            <RecentOrders/>
        </div>
        <div className="dashboard-cards dashboard-customersfeedback-container">
            <CustomersFeedback/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
