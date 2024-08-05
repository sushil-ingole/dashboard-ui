import "./RecentOrders.scss";

interface IOrder {
  customer: string;
  orderNo: string;
  amount: string;
  status: string;
}

const orders: IOrder[] = [
  { customer: "Wade Warren", orderNo: "15478256", amount: "$124.00", status: "Delivered" },
  { customer: "Jane Cooper", orderNo: "48965786", amount: "$365.02", status: "Delivered" },
  { customer: "Guy Hawkins", orderNo: "78958215", amount: "$45.88", status: "Cancelled" },
  { customer: "Kristin Watson", orderNo: "20965732", amount: "$65.00", status: "Pending" },
  { customer: "Cody Fisher", orderNo: "95715620", amount: "$545.00", status: "Delivered" },
  { customer: "Savannah Nguyen", orderNo: "78514568", amount: "$128.20", status: "Delivered" }
];


const RecentOrders = () => {
  return (
    <div className="recent-orders">      
      <h1 className="recent-orders-title">Recent Orders</h1>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Customer</th>
          <th scope="col">Order No.</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>
              <img src="/images/profile.png" alt="Profile" /> <span className="customer-name">{order.customer}</span>
            </td>
            <td>{order.orderNo}</td>
            <td>{order.amount}</td>
            <td>
              <button className={`btn text-white ${order.status.toLocaleLowerCase()}`}>{order.status}</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}

export default RecentOrders;
