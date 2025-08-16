import React, { useEffect, useLayoutEffect } from 'react'

function ULayoutEffect() {
    
    useEffect(()=>{
        console.log("Welcom from useEffect")
    },[])

    useLayoutEffect(()=>{
        console.log("welcome from useLayoutEffect")
    },[])



  return (
    <div>

        <h2>Time Pass Mat Kro</h2>

        {Array(40000).fill('').map((item,index)=>(
            <li key={index}>{Math.pow(Math.random(),10)}</li>))}
    </div>

  )
}

export default ULayoutEffect