import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Box from './Components/DragBox/DragBox';
import BrowsePngcats from './Components/Browse/Browse';
import { getAllPngcats, savePngcat, searchSequences } from './DataServices/pnGCATDataService';

export const DataContext = React.createContext();

export default function App() {
    const [searchResults, setResults] = useState([]);
    const [activeSeq, setActiveSeq] = useState({});

    const handleSave = (glyphs) => {
        console.log('save clicked');

        // updating state
        const pngcat = activeSeq;
        pngcat["SBOL_Glyphs"] = glyphs;
        setActiveSeq(pngcat);

        // updating API
        savePngcat(activeSeq);
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
        }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={() => <Search />} />
                    <Route exact path="/About" render={() => <About />} />
                    <Route exact path="/Box" render={() => <Box handleSave={handleSave} />} />
                    <Route exact path="/imageDrag" render={() => <ImageUploader />} />
                    <Route exact path="/Browse" render={() => <BrowsePngcats getAllPngcats={getAllPngcats} />} />
                </Switch>
            </Router>
        </DataContext.Provider>
    );
}
