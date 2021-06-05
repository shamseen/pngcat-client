import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Components from "./Components";
import Views from "./Views";
import {
	createPngcat,
	deletePngcat,
	getAllPngcats,
	savePngcat,
	searchSequences,
} from "./DataServices/pnGCATDataService";
import "./Styles/App.scss";

export const DataContext = React.createContext();

export default function App() {
	const [searchResults, setResults] = useState([]);
	const [activeSeq, setActiveSeq] = useState({});

	const newpnGKitten = async (newSeq) => {
		const kit = await createPngcat(newSeq);
		setActiveSeq(kit);
	};

	const handleSave = (glyphs) => {
		console.log("save clicked");

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
	};

	const handleSearch = async (params) => {
		console.log("submitted");

		try {
			const json = await searchSequences(...params);

			// updating state
			setResults(json);

			// catching any errors
		} catch (e) {
			console.log(e);
		}
	};

	const handleSelectedResult = (result) => {
		setActiveSeq(result);
		console.log("new seq");
		console.log(result);
		console.log(activeSeq);
	};

	return (
		<DataContext.Provider
			value={{
				activeSeq,
				handleSelectedResult,
				searchResults,
				handleSearch,
				deletePngcat,
			}}
		>
			<Router>
				<Components.Navbar />
				<Switch>
					<Route exact path="/" render={() => <Views.HomePage />} />
					<Route exact path="/About" render={() => <Views.AboutPage />} />
					<Route
						exact
						path="/Box"
						render={() => (
							<Components.DragBox pngcat={activeSeq} handleSave={handleSave} />
						)}
					/>
					<Route
						exact
						path="/Browse"
						render={() => (
							<Views.BrowsePage
								getAllPngcats={getAllPngcats}
								updateState={setActiveSeq}
							/>
						)}
					/>
				</Switch>
			</Router>
		</DataContext.Provider>
	);
}
