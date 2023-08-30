import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import "./App.css";
import { Login } from "./pages/login";
import { Navbar } from "./components/navabar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
