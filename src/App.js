import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Box from './Components/DragBox/DragBox';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import { savePngcat, searchSequences } from './DataServices/pnGCATDataService';

export const DataContext = React.createContext();

export default function App() {
    const [searchResults, setResults] = useState([]);
    const [activeSeq, setActiveSeq] = useState({});

    const handleSave = (glyphs) => {
        console.log('save clicked');
        const pngcat = {
            "Seq_Accession": "someseq",
            "Study_Accession": "somestudy",
            "SBOL_Glyphs": glyphs
        }
        savePngcat(pngcat);
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
            handleSearch
        }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={() => <Search />} />
                    <Route exact path="/About" render={() => <About />} />
                    <Route exact path="/Box" render={() => <Box handleSave={handleSave} />} />
                    <Route exact path="/imageDrag" render={() => <ImageUploader />} />
                </Switch>
            </Router>
        </DataContext.Provider>
    );
}
