import React, { useState, useEffect } from "react";
import dataLayer from './dataLayer.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Components/Forms/Form'
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
                    <Route exact path='/' render={() => <Form />} />
                    <Route exact path='/About' render={() => <About />} />
                </Switch>
            </Router>
        </DataContext.Provider>
    );
}