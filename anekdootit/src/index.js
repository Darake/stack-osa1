import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(selected)

  let min = Math.ceil(0)
  let max = Math.floor(props.anecdotes.length - 1)
  let random = Math.floor(Math.random() * (max - min + 1)) + min
  
  const handleSelectedClick = () => setSelected(random)
  const handleVoteClick = () => {
    props.anecdotes[selected].votes += 1
    setVote(props.anecdotes[selected])
  }

  return (
    <div>
      <p>{props.anecdotes[selected].anecdote}</p>
      <p>has {props.anecdotes[selected].votes} votes</p>
      <Button text='vote' handleClick={handleVoteClick} />
      <Button text='next anectode' handleClick={handleSelectedClick} />
    </div>
  )
}

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
      {text}
  </button>
)

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    votes: 0
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)