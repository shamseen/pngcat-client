import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import SearchResults from '../SearchResults/SearchResults'
import * as searchStyle from './Search.module.css'

export default function Search({ handleSubmit, searchResults }) {
  const [apiData, getApiDate] = useState('mock.json')
  const [searchString, setSearchString] = useState('author')
  const [results, setResults] = useState([])

  // const url = `genbankurl`

  // GET x3 for author,keyword, and DOI
  const getAPI = async () => {
    const response = await fetch("mockpnGCAT.json");
      const json = await response.json();
      console.log(json)
      // updating state
      setResults(json);

      // handling errors
      // console.log(json)
  }

  useEffect(async () => {
      getAPI()
    // try {
    //   // getting and formatting data
    //   const response = await fetch("mockpnGCAT.json");
    //   const json = await response.json();
    //   console.log(json)
    //   // updating state
    //   setResults(json);

    //   // handling errors
    //   console.log(json)
    // } catch (err) {
    //   console.log(err);
    // }
  }, []);

  const handleChange = (e) => {
    /* setSearch */
  }

  return (
    <div className={searchStyle.searchContainer}>
      {/* <DataContext.Provide value={{
        deletePngcat,
        updatedPngcat
      }}> */}
      <h2 className={searchStyle.header}>Search</h2>
      <form
        onsubmit={handleSubmit}
      >
        Author:{" "}
        <input
          className={searchStyle.input}
          type="text"
          id="author"
          placeholder="Author"
          onChange={handleChange}
        // value={/*sarchString */}
        />
        <br />
          Article DOI:{" "}
        <input
          className={searchStyle.input}
          type="text"
          id="articleDOI"
          placeholder="DOI link"
          onChange={handleChange}
        // value={/*searchString */}
        // onChange={/*onModelChange*/}
        // value={/*SBOL_Glyphs*/}
        />
        <br />
          Keyword:{" "}
        <input
          className={searchStyle.input}
          type="text"
          id="keyword"
          placeholder="keywords"
          onChange={handleChange}
        // value={/*searchString */}
        // onChange={/*onModelChange*/}
        // value={/*SBOL_Glyphs.component*/}
        />
        <br />
        <input type="submit" value="Search" className={searchStyle.searchBtn} />
      </form>

      <div>
        <h1>Results</h1>
        {/* {JSON.stringify(results)} */}
        { 
          results.map((res, i) => {
            console.log(res)
            return <SearchResults result={res} key={i} />
          })
        }
      </div>
      {/* </DataContext.Provide> */}
    </div>
  )
}

