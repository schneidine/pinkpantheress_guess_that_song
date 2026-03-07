import { useState } from 'react'
import FancyThatLogo from '/src/assets/FancyThat_icon.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationType, setAnimationType] = useState('')
  
  const totalCards = 10 // Total number of lyrics in the array

  const handlePrevious = () => {
    if (count > 0) {
      setShowAnswer(false)
      triggerAnimation('swipe-left')
      setCount(count - 1)
    }
  }

  const handleNext = () => {
    if (count < totalCards - 1) {
      setShowAnswer(false)
      triggerAnimation('swipe-right')
      setCount(count + 1)
    }
  }

  const handleRevealAnswer = () => {
    if (!showAnswer) {
      triggerAnimation('shake')
    }
    setShowAnswer(!showAnswer)
  }

  const triggerAnimation = (type) => {
    setAnimationType(type)
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  return (
    <>
            <h1> Guess That Song: PinkPantheress Edition</h1>

      <div className="main-content" >
      <p className="subheading"> How well do you know PinkPantheress? <br/> Find out by playing this mini game! </p>
     
      <p> Card {count + 1} of {totalCards}</p>

      <div className="card-container">
        <Card 
          cardNum={count} 
          showAnswer={showAnswer} 
          isAnimating={isAnimating}
          animationType={animationType}
        />
      </div>
      
      <div className="button-container">
        <button 
          onClick={handlePrevious}
          disabled={count === 0}
          className={count === 0 ? 'disabled' : ''}
        > 
          Previous Card 
        </button>
        <button onClick={handleRevealAnswer}> 
          {showAnswer ? 'Show Lyrics' : 'Reveal Answer!'} 
        </button>
        <button 
          onClick={handleNext}
          disabled={count === totalCards - 1}
          className={count === totalCards - 1 ? 'disabled' : ''}
        > 
          Next Card 
        </button>
      </div>

      </div>
    </>
  )
}

export default App
