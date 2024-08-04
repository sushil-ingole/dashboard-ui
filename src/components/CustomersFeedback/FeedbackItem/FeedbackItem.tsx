import "./FeedbackItem.scss";
import { FaStar } from "react-icons/fa";

interface IFeedback {
    username: string;
    rating: number;
    feedback: string;
}

const FeedbackItem = ({username, rating, feedback}: IFeedback) => {
  return (
    <div className="feedback-item">
      <div className="user-profile">
        <img src="src/assets/images/user.png" alt="User" />
        <span className="user-name">{username}</span>
      </div>
      <p className="user-rating">
        {Array(5).fill(null).map((_, index) => (
          <span key={index} className={index < rating ? `filled` : ''}><FaStar/></span>
        ))}
        </p>
      <p className="user-feedback">{feedback}</p>
    </div>
  )
}

export default FeedbackItem;