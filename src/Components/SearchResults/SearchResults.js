import Search from "../Search/Search"

const SearchResults = ({ result }) => {

  return (
    <div id="result">
      <hr />
      {
        Object.keys(result).map((prop, i) => {
          return (
            <div key={i}>
              <h4>{prop}:</h4>
              <span>{JSON.stringify(result[prop])}</span>
              <br />
              <br />
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults;