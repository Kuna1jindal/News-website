import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
}  from "react-router-dom";

export default class App extends Component{
  apiKey=process.env.REACT_APP_API_KEY
  state={
    progress:0
  }
 setprogress=(progress)=>{
  this.setState({
    progress:progress
  })
 }
  render(){
      return(
        <div>
          <Router>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
         <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="general" pagesize={9} category="general" country="in"/>}></Route>
          <Route exact path="/business" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="business" pagesize={9} category="business" country="in"/>}></Route>
          <Route exact path="/health" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="health" pagesize={9} category="health" country="in"/>}></Route>
          <Route exact path="/science" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="science" pagesize={9} category="science" country="in"/>}></Route>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="sports" pagesize={9} category="sports" country="in"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="technology" pagesize={9} category="technology" country="in"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} progressbar={this.setprogress} key="entertainment" pagesize={9} category="entertainment" country="in"/>}></Route>
         </Routes>
          </Router>
    </div>
      )
  }
}
