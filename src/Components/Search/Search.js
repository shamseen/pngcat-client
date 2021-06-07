import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import SearchResults from "./SearchResults";
import SearchTextInput from "./SearchTextInput";
import * as searchStyle from "./Search.module.css";

export default function Search() {
	const { handleSearch, searchResults, handleSelectedResult } =
		useContext(DataContext);
	const [sequence, setSeq] = useState("");
	const [study, setStudy] = useState("");
	const [keyword, setKeyword] = useState("");

	useEffect(async () => { }, [searchResults]);

	const handleSubmit = (e) => {
		// preventing page reset
		e.preventDefault();

		// API call
		handleSearch([sequence, study, keyword]);
	};

	return (
		<div className={searchStyle.searchFlex}>
			<div className={searchStyle.searchContainer}>
				<h2 className={searchStyle.header}>Search</h2>
				{/* ------- Search form --------- */}
				<form onSubmit={handleSubmit}>
					Sequence Id:{" "}
					<div id="search-seq-id">
						<SearchTextInput
							id="search-seq-id"
							className={searchStyle.input}
							state={sequence}
							updateState={setSeq}
							placeholder="CP034527"
						/>
					</div>
					<br />
					Publication Id:{" "}
					<div id="search-pub-id">
						<SearchTextInput
							className={searchStyle.input}
							state={study}
							updateState={setStudy}
							placeholder="PRJNA504496"
						/>
					</div>
					<br />
					Keyword:{" "}
					<div id="search-keyword">
						<SearchTextInput
							className={searchStyle.input}
							state={keyword}
							updateState={setKeyword}
							placeholder="somatostatin"
						/>
					</div>
					<br />
					<div id='search-btn' className={searchStyle.btnContainer}>
						<input
							type="submit"
							value="Search"
							className={searchStyle.searchBtn}
						/>
					</div>
				</form>
			</div>
			{/* ------- Results --------- */}
			<div id="results-container" className={searchStyle.resultContainer}>
				<h2 id='results-heading' className={searchStyle.header}>Results</h2>

				<SearchResults results={searchResults} handleSelect={handleSelectedResult} />
			</div>
		</div>
	);
}
