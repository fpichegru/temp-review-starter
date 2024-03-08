import reviews from "./data";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

import Review from "./components/Review";


const App = () => {

  const [currentReview, setCurrentReview] = useState(0)


  console.log("modulo 2 % 4",2 % 4)
  console.log("modulo 3 % 4",3 % 4)
  console.log("modulo 4 % 4",4 % 4)
  console.log("modulo 10 % 4",10 % 4)


  function checkNumber(number) {

    if (number > reviews.length - 1) {
      return 0
    }else if( number < 0){
      return reviews.length - 1
    }

    return number
  }

  function nextReview() {
   setCurrentReview( (currentIndex) => {
     const newIndex = currentIndex + 1

     return checkNumber(newIndex)
   })
  }

  function prevReview(){

    setCurrentReview( (currentIndex) => {
      const newIndex = currentIndex - 1

      return checkNumber(newIndex)
  })
 
  }

  function getRanDomNumber(min, max){

    let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);

    if(randomNumber === currentReview){
      randomNumber = currentReview +1
    }

    return randomNumber
  }

  function getRandomReview(){


    let randomReview = checkNumber(getRanDomNumber(0, reviews.length - 1))
    setCurrentReview(randomReview)

  }
  

  return (
    <main>
      <Review currentReview={currentReview} reviews={reviews} nextReview={nextReview} prevReview={prevReview} getRandomReview={getRandomReview}/>
    </main>
  );
}
export default App;
