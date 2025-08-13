import React, { useMemo, useState } from 'react'

function UMemo() {

  const [number,setNumber]=useState(0)
  const [counter,setcounter]=useState(null)
  

function CubeCal(number){
console.log("calculation done !!!")
  return Math.pow(number,3)
}

const result= useMemo(()=> CubeCal(number),[number])



  return (


    <div>


  <h1>Expensive Calculation Optimizer</h1>
  

  <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
  <h1>The cube of the number is :{result}</h1>
  <button onClick={()=>setcounter((prev)=> prev+1)}>count++</button>
<h1>{counter}</h1>

    </div>
  )
}

export default UMemo