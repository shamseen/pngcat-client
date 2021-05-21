import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Box from './Components/DragBox/DragBox';
import BrowsePngcats from './Components/Browse/Browse';
import {
    createPngcat,
    deletePngcat,
    getAllPngcats,
    savePngcat,
    searchSequences
} from './DataServices/pnGCATDataService';

export const DataContext = React.createContext();

export default function App() {
    const [searchResults, setResults] = useState([]);
    const [activeSeq, setActiveSeq] = useState({});

    const newpnGKitten = async (newSeq) => {
        const kit = await createPngcat(newSeq);
        setActiveSeq(kit)
    }

    const handleSave = (glyphs) => {
        console.log('save clicked');

        const pngcat = activeSeq;
        pngcat["SBOL_Glyphs"] = glyphs;

        // use PUT if already has a mongo ID
        if (activeSeq._id) {
            savePngcat(pngcat);
            setActiveSeq(pngcat);
        }

        // else - CREATE (store _id)
        else {
            newpnGKitten(pngcat);
        }

    }


    const handleSearch = async (params) => {
        console.log('submitted');

        try {
            const json = await searchSequences(...params);

            // updating state
            setResults(json);

            // catching any errors
        } catch (e) {
            console.log(e);
        }
    }

    const handleSelectedResult = (result) => {
        setActiveSeq(result);
        console.log('new seq');
        console.log(result);
        console.log(activeSeq);
    }


    return (
        <DataContext.Provider value={{
            activeSeq,
            handleSelectedResult,
            searchResults,
            handleSearch,
            deletePngcat
        }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={() => <Search />} />
                    <Route exact path="/About" render={() => <About />} />
                    <Route exact path="/Box" render={() => <Box pngcat={activeSeq} handleSave={handleSave} />} />
                    <Route exact path="/Browse" render={() => <BrowsePngcats getAllPngcats={getAllPngcats} />} />
                </Switch>
            </Router>
        </DataContext.Provider>
    );
}
