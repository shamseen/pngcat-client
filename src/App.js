import React, { useState, useEffect } from "react";
import dataLayer from './dataLayer.js';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Components/Forms/Form'


export const DataContext = React.createContext();

export default function App() {

    return (
        <DataContext.Provider value={{
            dataLayer
        }}>
            <div className="App">
                <nav className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/">Submit</Link>
                    <Link to="/">About</Link>
                </nav>
                <h1>.pnGCAT with react</h1>
                <Form />
            </div>
        </DataContext.Provider>
    );
}