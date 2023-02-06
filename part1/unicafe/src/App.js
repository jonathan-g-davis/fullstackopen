import { useState } from 'react'

const totalRatings = (ratings) => {
  const { good, neutral, bad } = ratings
  return good + neutral + bad
}

const averageRatings = (ratings) => {
  const { good, neutral, bad } = ratings
  return (good - bad) / totalRatings(ratings)
}

const positiveRatings = (ratings) => {
  const { good } = ratings
  const fraction = good / totalRatings(ratings)
  const percent = fraction * 100 + '%'
  return percent
}

const Feedback = ({ state }) => {
  const { ratings, setters } = state
  const { good, neutral, bad } = ratings
  const { setGood, setNeutral, setBad } = setters

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
      <p>
        <Ratings ratings={ratings} />
        <Total ratings={ratings} />
        <Average ratings={ratings} />
        <Positive ratings={ratings} />
      </p>
    </div>
  )
}

const Stat = ({ name, value }) => {
  return (
    <>
      {name} {value}
      <br />
    </>
  )
}

const Ratings = ({ ratings }) => {
  const { good, neutral, bad } = ratings

  return (
    <>
      <Stat name='good' value={good} />
      <Stat name='neutral' value={neutral} />
      <Stat name='bad' value={bad} />
    </>
  )
}

const Total = ({ ratings }) => {
  return (
    <>
      <Stat name='total' value={totalRatings(ratings)} />
    </>
  )
}

const Average = ({ ratings }) => {
  return (
    <>
      <Stat name='average' value={averageRatings(ratings)} />
    </>
  )
}

const Positive = ({ ratings }) => {
  return (
    <>
      <Stat name='positive' value={positiveRatings(ratings)} />
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