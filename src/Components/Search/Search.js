import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import * as searchStyle from './Search.module.css'

export default function Search() {
  const [apiData, getApiDate] = useState('mock.json')
  const[searchString, setSearchString] = useState('author')

  // const url = `url`

  // GET
  const getAPI = async () => {
    try {
      const res = await fetch('url')
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
          DOI:{" "}
          <input
            className={searchStyle.input}
            type="text"
            id="DOI"
            placeholder="DOI link"
            onChange={handleChange}
            // value={/*searchString */}
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs*/}
          />
          <br />
          Component:{" "}
          <input
            className={searchStyle.input}
            type="text"
            id="component"
            placeholder="functional component"
            onChange={handleChange}
            // value={/*searchString */}
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs.component*/}
          />
          <br />
          <input type="submit" value="Search" className={searchStyle.searchBtn}/>
        </form>
      {/* </DataContext.Provide> */}
    </div>
  )
}



