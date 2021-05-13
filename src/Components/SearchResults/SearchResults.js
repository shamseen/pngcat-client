import Search from "../Search/Search"

const SearchResults = ({ result }) => {

  return (
    <div id="result">
      <h1>Results</h1>
      {/* {mockpnGCAT.json.map = () => {
        <div key={keyword.id} className="keyword">
          <h1>keywords</h1>
        </div>
      })} */}
      JSON
      {JSON.stringify(result)}
    </div>
  )
}

export default SearchResults;