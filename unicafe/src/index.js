import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
)

const Statistics = ({headline, feedback}) => {
  const total = feedback[0].amount + feedback[1].amount + feedback[2].amount
  const median = (feedback[0].amount * 1 + feedback[2].amount * (-1)) / total
  const positive = 100 * (feedback[0].amount / total) + ' %'

  if (total === 0) {
    return (
      <div>
        <Header text={headline} />
        <p>Ei yhtään palatetta annettu</p>
      </div>
    )
  }

  return (
  <div>
    <Header text={headline} />
    <table>
      <Statistic text={feedback[0].text} value={feedback[0].amount} />
      <Statistic text={feedback[1].text} value={feedback[2].amount} />
      <Statistic text={feedback[2].text} value={feedback[2].amount} />
      <Statistic text='yhteensä' value={total} />
      <Statistic text='keskiarvo' value={median} />
      <Statistic text='positiivisia' value={positive} />
    </table>
  </div>
 )
}

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