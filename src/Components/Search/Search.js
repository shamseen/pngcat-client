import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import SearchResults from '../SearchResults/SearchResults'
import * as searchStyle from './Search.module.css'

export default function Search() {
  const [apiData, getApiDate] = useState('mock.json')
  const [searchString, setSearchString] = useState('author')

  // const url = `genbankurl`

  // GET x3 for author,keyword, and DOI
  const getAPI = async () => {
    try {
      const res = await fetch('genbankurl')
      const data = await result.json()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAPI();
  }, []);

  const handleChange = (e) => {
    /* setSearch */
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getAPI()
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
          <input type="submit" value="Search" className={searchStyle.searchBtn}/>
        </form>
        <div className={searchStyle.resultContainer}>
          <SearchResults />
        </div>
      {/* </DataContext.Provide> */}
    </div>
  )
}


