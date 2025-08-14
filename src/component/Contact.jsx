import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'

function Contact() {

  const {phone ,name} =useContext(AppContext);

  return (
    <div>Contact
    <h3>Phone no: {phone}</h3>
    <h3>Name: {name}</h3>


    </div>
  )
}

export default Contact