import { useState } from "react";
import { Search } from "../Components";
import Tutorial from "./Tutorial";


export default function HomePage() {
  const [runTutorial, startTutorial] = useState(false);


  return (
    <div id="homepage">
      <Search />
      {/* TO DO: mock search results */}

      <Tutorial />

      {/* TO DO: show tutorial if button is pressed */}

      {/* <div className="card">
        <button
          onClick={() => startTutorial(true)}
          id="tutorial-btn">
          Tutorial
        </button>
      </div>
      {runTutorial ? <Tutorial runTutorial={startTutorial} /> : null} */}
    </div>
  )
}