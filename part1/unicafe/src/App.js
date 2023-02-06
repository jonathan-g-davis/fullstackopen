import { useState } from 'react'

const Feedback = ({ state }) => {
  const { ratings, setters } = state;
  const { good, neutral, bad } = ratings;
  const { setGood, setNeutral, setBad } = setters;

  const rateGood = () => {
    console.log('counting good rating')
    setGood(good + 1)
  }

  const rateNeutral = () => {
    console.log('counting neutral rating')
    setNeutral(neutral + 1)
  }

  const rateBad = () => {
    console.log('counting bad rating')
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={rateGood} text='Good' />
      <Button onClick={rateNeutral} text='Neutral' />
      <Button onClick={rateBad} text='Bad' />
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}

const Statistics = ({ ratings }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <DisplayRatings ratings={ratings} />
    </div>
  )
}

const DisplayRatings = ({ ratings }) => {
  const { good, neutral, bad } = ratings;

  return (
    <>
      <p>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
      </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ratings = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  const setters = {
    setGood: setGood,
    setNeutral: setNeutral,
    setBad: setBad
  }

  const state = {
    ratings: ratings,
    setters: setters
  }

  return (
    <div>
      <Feedback state={state} />
      <Statistics ratings={ratings} />
    </div>
  )
}

export default App