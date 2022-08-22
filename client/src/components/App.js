import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../utilities.css";
import "./App.css";

import GamePage from "./pages/GamePage";
import NotFound from "./pages/NotFound";

function App() {

    return (
        <div className="root-page-container">
            <Router>
                <Routes>
                    <Route path="/" element={<GamePage />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
