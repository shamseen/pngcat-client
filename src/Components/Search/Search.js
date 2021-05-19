import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import SearchResults from "../SearchResults/SearchResults";
import * as searchStyle from "./Search.module.css";

export default function Search() {
	const { handleSubmit, searchResults } = useContext(DataContext);

	useEffect(async () => {
		console.log(searchResults);
	}, []);

	const handleChange = (e) => {
		/* setSearch */
	};

	return (
		<div className={searchStyle.searchContainer}>
			<h2 className={searchStyle.header}>Search</h2>

			{/* ------- Search form --------- */}
			{/* ---- remove author, add DNAid ---- */}
			{/* ---- rename DOI to study ID ---- */}
			<form onSubmit={handleSubmit}>
				Author:{" "}
				<input
					className={searchStyle.input}
					type="text"
					id="author"
					placeholder="Author"
					onChange={handleChange}
				/>
				<br />
				Article DOI:{" "}
				<input
					className={searchStyle.input}
					type="text"
					id="articleDOI"
					placeholder="DOI link"
					onChange={handleChange}
				/>
				<br />
				Keyword:{" "}
				<input
					className={searchStyle.input}
					type="text"
					id="keyword"
					placeholder="keywords"
					onChange={handleChange}
				/>
				<br />
				<input type="submit" value="Search" className={searchStyle.searchBtn} />
			</form>

			{/* ------- Results --------- */}
			<div>
				<h1>Results</h1>
				{searchResults.map((res, i) => {
					return <SearchResults result={res} key={i} />;
				})}
			</div>
		</div>
	);
}
