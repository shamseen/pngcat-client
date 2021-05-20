import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import SearchResults from '../SearchResults/SearchResults'
import SearchTextInput from './SearchTextInput';
import * as searchStyle from './Search.module.css'



export default function Search() {
  const { searchAPI, searchResults } = useContext(DataContext);
  const [sequence, setSeq] = useState('');
  const [study, setStudy] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(async () => {
  }, []);

  const handleSubmit = (e) => {
    // preventing page reset
    e.preventDefault();

    // API call
    searchAPI([sequence, study, keyword]);
  }

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

        Sequence Id:{" "}
        <SearchTextInput state={sequence} updateState={setSeq} placeholder='CP034527' />
        <br />

        Publication Id:{" "}
        <SearchTextInput state={study} updateState={setStudy} placeholder='PRJNA504496' />
        <br />

        Keyword:{" "}
        <SearchTextInput state={keyword} updateState={setKeyword} placeholder='somatostatin' />
        <br />

        <input type="submit" value="Search" className={searchStyle.searchBtn} />
      </form>

      {/* ------- Results --------- */}
      <div>
        <h1>Results</h1>
        {
          searchResults.map((res, i) => {
            return <SearchResults result={res} key={i} />
          })
        }
      </div>
    </div>
  )
}
