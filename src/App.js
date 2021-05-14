import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'

export const DataContext = React.createContext()

export default function App() {
    const [searchResults, setResults] = useState([]);

    const getAPI = async () => {

        try {
            const response = await fetch("mockpnGCAT.json");
            const json = await response.json();
            console.log(json)

            // updating state
            setResults(json);

            // handling errors
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        console.log('submitted');
        e.preventDefault();
        getAPI();
    }

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