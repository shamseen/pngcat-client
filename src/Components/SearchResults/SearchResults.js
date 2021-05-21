export default function SearchResults({ result, handleSelect }) {

  const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';

  return (
    <div id="result">
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
        id="new-pngcat">
        Create a new .pnGCAT!
        </button>

      <h4>{result.description}</h4>
      <span>
        View on the European Nucleotide Archive:&nbsp;
        <a href={`${baseUrl}/${result.accession}`}>{result.accession}</a>
      </span>
      <h5>
        Publication ID:&nbsp;
        <a href={`${baseUrl}/${result.study_accession}`}>{result.study_accession}</a>
      </h5>
    </div>
  )
}