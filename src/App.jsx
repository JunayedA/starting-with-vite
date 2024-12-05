import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="mobile" price="15000"></Device>
      <Device name="Laptop" price="50000"></Device>
      <Device name="Waatch" price="2000"></Device>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Device(props){
  const {name, price} = props
  return(
    <div>
      <h3>this is my {name} and this is {price} </h3>
    </div>
  )
}

function Person() {
  const name = "Junayed Ahmed";
  const age = 22;
  const personStyle = {
    color:"red",
    backgroundColor: "black",
    borderRadius:"5px"

  }
  return(
    <div style={personStyle}>
      <h1>hey this is my first app</h1>
      <h2>My name is {name} and my age is {age} </h2>
    </div>
  )
}

function Student() {
  const studentData = {name: 'rahim mia',  schoolName:'atbksh', subject: 'business Studies', classRoll: 22, dream:'engineer'}
  return(
    <div className='student-style'>
      <h3>hi, my name is {studentData.name}. I am a student of {studentData.schoolName}. Now i'm reding in {studentData.subject}. I love this subject. my was to be an {studentData.dream}.</h3>
    </div>
  )
}

export default App