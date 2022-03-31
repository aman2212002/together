import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import  Login from'./components/Login';
import MainNote from './components/Notes/MainNote';
import Calendar from './components/Timetable';






 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            
            
           <Routes>
                 {/* <Route caseSensitive path='/' element={< Login />}></Route> */}
                 <Route caseSensitive path='/login' element={< Home />}></Route>
                 <Route caseSensitive path='/MainNote' element={< MainNote />}></Route>
                 {/* <Route caseSensitive path='/Timetable' element={<Calendar/>}></Route> */}
                 
          </Routes>
          </div>
       </Router>
   );

  }
}
 
export default App;