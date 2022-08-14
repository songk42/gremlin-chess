import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../utilities.css";
import "./App.css";

import NotFound from "./pages/NotFound";

import { get, post, isEmpty } from "../utilities";

function App() {

    return (
        <div className="root-page-container">
            <p>Hello!</p>
        </div>
    );
}

export default App;
