import { useState } from 'react'
import './App.css'

function App() {
 const [count,setCount]=useState(0)

 const increase=()=>{
  setCount(count+1);
 }
 
 const decrease=()=>{
  if(count !=0){
setCount(count-1);
  }
  
 }


  return (
    <>


      <div className='sec1'> 
        <h1 className='heading'> welcome to counter section</h1>
       <div className="btn">
        <div className='box1'>
          <button onClick={increase}>click me to increase</button>
       </div>
       <div className="box2">
        <button onClick={decrease}>click me to decrease</button>
       </div>
       </div>
       <h1 className='count'>{count}</h1>
       </div>
       


    </>
  )
}

export default App
