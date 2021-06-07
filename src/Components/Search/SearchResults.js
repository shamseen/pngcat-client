import { useEffect } from 'react';

import * as searchStyle from "./Search.module.css";

export default function SearchResults({ results, handleSelect }) {

  const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';

  useEffect(() => { console.log(results) }, results)

  return (
    <div id="results">
      {results.map(result => {
        return (<div
          id={'result-' + result.accession}
          key={result.accession}
        >
          <hr />
          <button
            // saving the IDs of the sequence the user selected
            // to use in drag and drop page
            onClick={() => {
              handleSelect({
                "Seq_Accession": result.accession,
                "Study_Accession": result.study_accession,
                "SBOL_Glyphs": []
              })
            }}
            type='button'
            id={"new-pngcat-" + result.accession}
            className={searchStyle.searchBtn}>
            Select
        </button>
          <h4>{result.description}</h4>
          <div id={'links-' + result.accession} className="result-links">
            <span>
              View on the European Nucleotide Archive:&nbsp;
            <a href={`${baseUrl}/${result.accession}`}>{result.accession}</a>
            </span>
            <h5>
              Publication ID:&nbsp;
            <a href={`${baseUrl}/${result.study_accession}`}>{result.study_accession}</a>
            </h5>
          </div>
        </div>

        )
      })}


    </div>
  )
}