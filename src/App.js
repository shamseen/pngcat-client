import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search/Search'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'

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

        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' render={() => <Search
                    handleSubmit={handleSubmit}
                    searchResults={searchResults} />}
                />
                <Route exact path='/About' render={() => <About />} />
            </Switch>
        </Router>
    );
}