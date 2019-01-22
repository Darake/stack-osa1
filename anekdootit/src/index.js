import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)

  if (props.anecdotes[selected].votes > props.anecdotes[mostVotes].votes) {
    setMostVotes(selected)
  }
  
  const handleSelectedClick = () => setSelected(randomNumber(props.anecdotes.length, selected))
  const handleVoteClick = () => {
    props.anecdotes[selected].votes += 1
    setSelected(selected)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected].text} votes={props.anecdotes[selected].votes} />
      <Button text='vote' handleClick={handleVoteClick} />
      <Button text='next anectode' handleClick={handleSelectedClick} />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={props.anecdotes[mostVotes].text} votes={props.anecdotes[mostVotes].votes} />
    </div>
  )
}

const Anecdote = ({anecdote, votes}) => (
  <div>
    <p>
      {anecdote}
      <br></br>
      has {votes} votes
    </p>
  </div>
)

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
      {text}
  </button>
)

const randomNumber = (length, selected) => {
  let min = Math.ceil(0)
  let max = Math.floor(length - 1)
  let random = Math.floor(Math.random() * (max - min + 1)) + min

  if (random === selected) return randomNumber(length, selected)
  else return random
}

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)