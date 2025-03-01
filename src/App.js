import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
}  from "react-router-dom";
const App=()=>{
const [progress, setProg] = useState(0);
const  apiKey=process.env.REACT_APP_API_KEY 
 const setprogress=(progress)=>{
  setProg(progress);
 }
 
      return(
        <div>
          <Router>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
         <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} progressbar={setprogress} key="general" pagesize={9} category="general" country="in"/>}></Route>
          <Route exact path="/business" element={<News apiKey={apiKey} progressbar={setprogress} key="business" pagesize={9} category="business" country="in"/>}></Route>
          <Route exact path="/health" element={<News apiKey={apiKey} progressbar={setprogress} key="health" pagesize={9} category="health" country="in"/>}></Route>
          <Route exact path="/science" element={<News apiKey={apiKey} progressbar={setprogress} key="science" pagesize={9} category="science" country="in"/>}></Route>
          <Route exact path="/sports" element={<News apiKey={apiKey} progressbar={setprogress} key="sports" pagesize={9} category="sports" country="in"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={apiKey} progressbar={setprogress} key="technology" pagesize={9} category="technology" country="in"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} progressbar={setprogress} key="entertainment" pagesize={9} category="entertainment" country="in"/>}></Route>
         </Routes>
          </Router>
    </div>
      )
  
}
export default App;