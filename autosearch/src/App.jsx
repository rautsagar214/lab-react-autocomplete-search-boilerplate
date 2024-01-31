import { useState } from 'react'
import './App.css'
import Data from "./assets/resources/countryData.json"

function App() {
  const [letter, setletter] = useState("")
  const [showSug , setSug] = useState(true)

  let handleChange = (e) =>{
  
    setletter(e.target.value)
    setSug(true)
  }

  

  let suggestionList = Data.filter((ele)=>{
    if (ele.name.toLowerCase().startsWith(letter.toLowerCase())){
      return ele.name
    }
  })

  

  let handleDataList = (e) =>{
    if (e.keyCode === 27){
      setSug(false)
      console.log("Escape")
    }
  }
  return (
    <>
      <h2>Search Country</h2>

      <input type="text" onChange={handleChange} list='suggestions' onKeyDown={handleDataList}/>
      <datalist id='suggestions'>
        {showSug && suggestionList.map((ele , i)=>{
          return <option key={i}>{ele.name}</option>
        })} 
      </datalist>
    </>
  )
}

export default App