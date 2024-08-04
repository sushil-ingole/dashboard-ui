import "./CustomersFeedback.scss";
import FeedbackItem from "./FeedbackItem/FeedbackItem";

const usersFeedbacks = [
  {
    username: "Jenny Wilson",
    rating: 4, 
    review: "The food was excellent ans so was the service. I had the mushroom risotto with scallops which was awesome. I had burger over greens (gluten-free) which was also very good. They were very conscientious about gluent allergies."
  },
  {
    username: "Dianne Russell",
    rating: 5, 
    review: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
  },
  {
    username: "Devon Lane",
    rating: 4, 
    review: "Normally wings are wings, but theirs are lean meaty and tender and very delicious in taste."
  }
];

const CustomersFeedback = () => {
  return (
    <div className="customers-feedback">
        <h1 className="customers-feedback-title">Customers Feedback</h1>
        {usersFeedbacks?.map((feedback, index) => {
          return <FeedbackItem key={index} username={feedback.username} rating={feedback.rating} feedback={feedback.review} />
        })}
    </div>
  )
}

export default CustomersFeedback;
