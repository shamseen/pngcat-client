import React, { useState, useEffect } from "react";
import dataLayer from './DataLayer/dataLayer.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Search from './Components/Search/Search'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'


export const DataContext = React.createContext();

export default function App() {
    const [searchResults, setResults] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // getting and formatting data
            const response = await fetch("mockpnGCAT.json");
            const json = await response.json();

            // updating state
            setResults(json);

            // handling errors
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <DataContext.Provider value={{
            searchResults,
            handleSubmit
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