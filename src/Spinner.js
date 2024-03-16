import React, { Component } from 'react'
import loading from "./s.gif";
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img style={{height:"50px",width:"50px"}} src={loading} alt="Loading"/>
      </div>
    )
  }
}
