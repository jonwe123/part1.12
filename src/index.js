import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [selvote, setVote] = useState(0)
  let temp 

  const NewAnecdotes =  () => {
    temp = (Math.floor((Math.random()*(props.anecdotes.length - 1)) + 0))
    setSelected(temp)

  }

  const Vote = () => {
    props.anecdotes[selected].value = props.anecdotes[selected].value + 1
    // console.log(anecdotes[0].value)
    setVote(selvote + 1)
  } 

  function Mostvotes() {
    var temp = 0
    var pos = 0
    var i
    for (i = 0 ; i < props.anecdotes.length; i++ ) {
      if (props.anecdotes[i].value >  temp) {
        pos = i
        temp = props.anecdotes[i].value
      }
    }
    console.log("position value ", props.anecdotes[pos].value) 
    return pos

  }
  // const Mostvotes = () => {
  //   var temp = 0
  //   var pos = 0
  //   var i
  //   for (i = 0 ; i < props.anecdotes.length; i++ ) {
  //     if (props.anecdotes[i].value >  temp) {
  //       pos = i
  //       temp = props.anecdotes[i].value
  //     }
  //   }
  //   console.log(pos)
  //   return pos
  // }

  const Mostanec = (props) => {
    return (
      <div>
        <h1> The anecdote with the most votes </h1>
        <p>
         {anecdotes[Mostvotes()].text}
        </p>
      </div>
    )


  }
  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>
    {props.anecdotes[selected].text} 
    </p>

    <p>
      {props.anecdotes[selected].value}
    </p>
      <button onClick={Vote}>vote</button>
      <button onClick={NewAnecdotes}> next anecdote </button>

     {/* {props.anecdotes[Mostvotes].text} */}
    <Mostanec myanec={props.anecdotes} />

    </div>
  )
}

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    value: 0
  },
  {
    text: 'Add more manpower late in the project makes it later',
    value: 0
  },
  {
    text: 'Premature optimization is the root of all evil',
    value: 0
  },
  {
    text: 'The best way to get a project done faster is to start faster',
    value: 0
  },
  {
    text: 'Even the best planning is not so omniscient as to get it right the first time',
    value: 0
  },
  {
    text: 'How does a project get to be a year late?..One day at a time',
    value: 0
  },
  {
    text: 'Every good work of software starts by straching a developers personal itch',
    value: 0
  }
    
]
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

