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

    const handleSave = (glyphs) => {
        console.log('save clicked');
        const pngcat = {
            "Seq_Accession": "someseq",
            "Study_Accession": "somestudy",
            "SBOL_Glyphs": glyphs
        }

        // console.log(JSON.stringify(pngcat));

        savePngcat(pngcat);
    }


    const searchAPI = async (params) => {
        console.log('submitted');

        try {
            const json = await searchSequences(...params);

            // updating state
            setResults(json);
        } catch (e) {
            console.log(e);
        }
    }

    return (

        <DataContext.Provider value={{
            searchResults,
            searchAPI,
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
