import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  const onNextCLick = () => {
    if (index === 15) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <div className='root'>
        <div className='app-container'>
          <h2>The All-around knowledge quiz!</h2>
          <h4>One question per difficulty: Easy, Medium, Hard, Impossible</h4>
          <h4>Easy: Green | Medium: Yellow | Hard: Orange | Impossible: Red</h4>
          <h4>Four subjects: Math, English, Science, History</h4>
          <h5>Number of cards: 16</h5>
          <Flashcard cardNumber={index}/>
          <button onClick={onNextCLick}>⭢</button>
        </div>
      </div>
    </>
  )
}

export default App
