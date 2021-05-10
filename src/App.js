import React, { useState, useEffect } from "react";
import dataLayer from './dataLayer.js';

export const DataContext = React.createContext();

export default function App() {

    return (
        <DataContext.Provider value={{
            dataLayer
        }}>
            <div className="App">
                <h1>.pnGCAT with react</h1>
            </div>
        </DataContext.Provider>
    );
}