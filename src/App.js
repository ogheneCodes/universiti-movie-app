import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./COMPONENTS/Registration";
import Login from "./COMPONENTS/Login";
import Main from "./COMPONENTS/Main";
import Card from "./COMPONENTS/Card";
import MovieDetail from "./COMPONENTS/MovieDetail";
function App() {
  return (
    <>
      <Router>
        
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
