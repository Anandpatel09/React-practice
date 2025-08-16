import React, { useState,useReducer } from 'react'

function UReducer() {

    const initialState={count:0}

    const reducer =(state,action)=>{
      switch(action.type){
        case 'increase' : {
          return {count : state.count +1}
        }
        case 'decrease' : {
          return {count: state.count -1}
        }
        default : {
          return state
        }
      }
    }

const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
       
       <h1>{state.count}</h1>
       <button onClick={()=>dispatch({type:"increase"})}>increament</button>
       <button onClick={()=>dispatch({type:"decrease"})}>decreament</button>

    </div>
  )
}

export default UReducer