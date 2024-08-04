import { BiCartAdd } from "react-icons/bi";
import "./StatsCard.scss";
import CardDetails from "./CardDetails/CardDetails";
import { TbShoppingCartCancel, TbShoppingCartCopy } from "react-icons/tb";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const StatsCard = () => {
  return (
    <div className="stats-card">
        <CardDetails title={'Total Orders'} total={'75'} percent={'3'} profit={true} icon={<BiCartAdd/>}/>
        <CardDetails title={'Total Delivered'} total={'70'} percent={'3'} profit={false} icon={<TbShoppingCartCopy/>}/>
        <CardDetails title={'Total Cancelled'} total={'05'} percent={'3'} profit={true} icon={<TbShoppingCartCancel/>}/>
        <CardDetails title={'Total Revenue'} total={'$12k'} percent={'3'} profit={false} icon={<RiMoneyRupeeCircleLine/>}/>
    </div>
  )
}

export default StatsCard;