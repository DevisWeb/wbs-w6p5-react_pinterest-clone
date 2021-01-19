import "./style.css";
import StarIconFilled from "./starfilled";

export default function Rating({ rating }) {
  return (
    <div className="rating-container flex">
      {[1, 2, 3, 4, 5].map((index) => {
        return <StarIconFilled index={index} rate={rating} />;
      })}
    </div>
  );
}
