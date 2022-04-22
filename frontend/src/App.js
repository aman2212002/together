import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/complaint-app/details";

import Home from "./components/Home";
import Login from "./components/Login";
import MainNote from "./components/Notes/MainNote";
import Calendar from "./components/Timetable";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route caseSensitive path='/' element={< Login />}></Route>
            <Route caseSensitive path="/dashboard" element={<Home />}></Route>
            <Route
              caseSensitive
              path="/main-note"
              element={<MainNote />}
            ></Route>
            <Route caseSensitive path='/time-table' element={<Calendar/>}></Route>
            <Route caseSensitive path='/complaint-box' element={<Details/>}></Route>
            <Route caseSensitive path="/details" element={<details/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
