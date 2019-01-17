import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Part = ({text, amount}) => (<><p>{text} {amount}</p></>)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Content = ({feedback}) => (
  <div>
    <Part text={feedback[0].text} amount={feedback[0].amount} />
    <Part text={feedback[1].text} amount={feedback[1].amount} />
    <Part text={feedback[2].text} amount={feedback[2].amount} />
  </div>
)

const Statistics = ({headline, feedback}) => (
  <div>
    <Header text={headline} />
    <Content feedback={feedback} />
  </div>
)

const Feedback = ({text, feedback}) => (
  <div>
    <Header text={text} />
    <Button handleClick={feedback[0].handleClick} text={feedback[0].text} />
    <Button handleClick={feedback[1].handleClick} text={feedback[1].text} />
    <Button handleClick={feedback[2].handleClick} text={feedback[2].text} />
  </div>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const feedback = [
      {
        text: 'hyvä',
        handleClick: handleGoodClick,
        amount: good
      },
      {
        text: 'neutraali',
        handleClick: handleNeutralClick,
        amount: neutral
      },
      {
        text: 'huono',
        handleClick: handleBadClick,
        amount: bad
      }
    ]

  return (
    <div>
      <Feedback text='anna palautetta' feedback={feedback} />
      <Statistics headline='statistiikka' feedback={feedback} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)