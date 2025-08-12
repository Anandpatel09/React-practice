import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
function Uref() {

    const [count,setCount]=useState(0);
    const value =useRef(0);
   
useEffect(()=>{
    value.current=value.current+1;
});


  return (
    <div>
<h1>with useref</h1>
<button onClick={()=>setCount(prev=>prev-1)}>-1</button>
<h1>{count}</h1>
<button onClick={()=>setCount(prev=>prev+1)}>+1</button>
<h1>Re-render {value.current}</h1>

    </div>

  )
}

export default Uref