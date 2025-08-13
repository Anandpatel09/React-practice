import React, { useCallback, useState } from 'react'
import Header from './Header'
function UCallback() {
const [counter,setCounter]=useState(0)
const fun= useCallback((counter)=>{},[counter])

  return (

    <div>
<Header fun={fun}/>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter((pev)=>pev+1)}>counter</button>

 
    </div>
  )
}

export default UCallback