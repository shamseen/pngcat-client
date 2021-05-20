export default function SearchResults({ result }) {

  return (
    <div id="result">
      <hr />
      <h4>{result.description}</h4>
      <span>View on the European Nucleotide Archive:&nbsp;
        <a href={`https://www.ebi.ac.uk/ena/browser/view/${result.accession}`}>{result.accession}
        </a></span>
      <h5>
        Publication ID:&nbsp;
        <a href={`https://www.ebi.ac.uk/ena/browser/view/${result.study_accession}`}>{result.study_accession}
        </a>
      </h5>
    </div>
  )
}