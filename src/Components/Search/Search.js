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

	useEffect(async () => { }, []);

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
					<SearchTextInput
						id="search-seq-id"
						className={searchStyle.input}
						state={sequence}
						updateState={setSeq}
						placeholder="CP034527"
					/>
					<br />
					Publication Id:{" "}
					<SearchTextInput
						id='search-pub-id'
						className={searchStyle.input}
						state={study}
						updateState={setStudy}
						placeholder="PRJNA504496"
					/>
					<br />
					Keyword:{" "}
					<SearchTextInput
						id='search-keyword'
						className={searchStyle.input}
						state={keyword}
						updateState={setKeyword}
						placeholder="somatostatin"
					/>
					<br />
					<div className={searchStyle.btnContainer}>
						<input
							id='search-btn'
							type="submit"
							value="Search"
							className={searchStyle.searchBtn}
						/>
					</div>
				</form>
			</div>
			{/* ------- Results --------- */}
			<div className={searchStyle.resultContainer}>
				<h2 id='results-heading' className={searchStyle.header}>Results</h2>
				{searchResults.map((res, i) => {
					return (
						<SearchResults
							handleSelect={handleSelectedResult}
							result={res}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
}
