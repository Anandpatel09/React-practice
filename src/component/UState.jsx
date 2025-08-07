
import { useState } from 'react'


function UState() {
 const [count,setCount]=useState(0)

 const increase=()=>{
  setCount(count+1);
 }
 
 const decrease=()=>{
  if(count !=0){
setCount(count-1);
  }
 }

 const [car, setCar]=useState({
  name:"ferrari",
  model:"caRox",
  price:"$5400",
  color:"red"
 })

const change=()=>{
 
  setCar((car)=>{
    return {...car,color:"blue"}
  })

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
       

       <div className="car">
        <h1 className='heading'>The Car is in {car.color} and the {car.model} is this and the price is {car.price}</h1>
        <div id="col"></div>
         <button onClick={change}>Change color</button>
       </div>


    </>
  )
}

export default UState