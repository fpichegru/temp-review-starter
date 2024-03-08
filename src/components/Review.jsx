import { FaQuoteRight } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export default function Review({ currentReview, reviews, nextReview, prevReview , getRandomReview}) {
  console.log(currentReview);

  return (
    <div className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={reviews[currentReview].image}
          alt={reviews.name}
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{reviews[currentReview].name}</h4>
      <h5 className="job">{reviews[currentReview].job}</h5>
      <p className="info">{reviews[currentReview].text}</p>
      <div className="btn-container">
        <button onClick={() => prevReview()} className="prev-btn">
          <SlArrowLeft />
        </button>
        <button onClick={() => nextReview()} className="next-btn">
          <SlArrowRight />
        </button>
      </div>
      <button
      onClick={() => getRandomReview()}
      className="btn btn-hipster">Surprise me</button>
    </div>
  );
}
