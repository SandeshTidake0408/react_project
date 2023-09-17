import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/main";
import "./App.css";
import { Login } from "./pages/login";
import { Navbar } from "./components/navabar";
import { CreatePost } from "./pages/create-post/posts";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/createpost" element={<CreatePost />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
