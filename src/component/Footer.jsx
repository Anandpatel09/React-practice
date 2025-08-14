import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'

function Footer() {
const {phone}=useContext(AppContext);



  return (
    <div>Footer
    <h3>Phone no. {phone}</h3>
    </div>
  )
}

export default Footer