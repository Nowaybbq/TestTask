import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import RecipePage from "./Pages/RecipePage/Recipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
