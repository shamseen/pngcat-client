import React, { useState, useEffect } from "react";
import dataLayer from './dataLayer.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Search from './Components/Search/Search'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'


export const DataContext = React.createContext();

export default function App() {

    return (
        <DataContext.Provider value={{
            dataLayer
        }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' render={() => <Search />} />
                    <Route exact path='/About' render={() => <About />} />
                </Switch>
            </Router>
        </DataContext.Provider>
    );
}