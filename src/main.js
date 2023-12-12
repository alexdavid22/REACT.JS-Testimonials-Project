import { useState } from "react"
import "./style.css"

function Main() {
  let [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    { quote: "The best product i've ever used", author: "Jane" },
    { quote: "I highly recomend this product to anyone", author: "Sean" },
    { quote: "This is one of my best buys yet", author: "Veronica" },
  ]

  function handlePrev() {
    if (currentIndex <= 0) {
      setCurrentIndex(testimonials.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleNext() {
    if (currentIndex >= testimonials.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }
  return (
    <>
      <div className="testimonials">
        <div className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
          - {testimonials[currentIndex].author}
        </div>
        <testimonials className="testimonials-nav">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </testimonials>
      </div>
    </>
  )
}

export default Main
