import React from 'react'
import loading from "./s.gif";
const Spinner=()=> {
  
    return (
      <div className='text-center' >
        <img style={{height:"50px",width:"50px"}} src={loading} alt="Loading"/>
      </div>
    )
  
}

export default Spinner;