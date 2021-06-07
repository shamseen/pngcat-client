import React, { useContext, useState } from "react";
import { Steps, Hints } from "intro.js-react";
import { DataContext } from "../App";

import "intro.js/introjs.css";
import "../Styles/tutorial.scss";


/* -- Sources
https://github.com/HiDeoo/intro.js-react#introjs-options
https://codesandbox.io/s/introjs-react-example-forked-n8yjj?file=/App.js
*/

export default function Tutorial() {
  const { handleSearch, searchResults, handleSelectedResult } = useContext(DataContext);

  /* -- State Vars -- */
  const [enabled, setEnabled] = useState(true);

  const [steps] = useState([
    {
      element: "#search-btn",
      intro: "btn"
    },
    {
      intro: "Welcome! To start off, let's find an existing sequence in the European Nucleotide Archive."
    },
    {
      element: "#search-keyword",
      intro: "Try searching by a partial keyword 'soma'"
    },
    {
      element: "#results-container",
      intro: "results"
    },
    {
      element: "#link-LT962381",
      intro: "links"
    },
    {
      element: "#result-LT962382 > #new-pngcat",
      intro: "select"
    }
  ]);

  const [hints] = useState([
    {
      element: ".hello",
      hint: "Hello hint",
      hintPosition: "middle-right"
    }
  ]);

  const config = {
    // styling
    buttonClass: "tutorial-btn",
    tooltipClass: 'card',

    // content
    hideNext: true, // on last step
    hidePrev: true, // on first step
    showProgress: true, // progress bar
    showBullets: false, // those lil progress dots
    showStepNumber: false,
    skipLabel: "Exit (esc)"
  };

  /* -- Functions -- */
  const mockResults = () => {
    const mock = [
      {
        accession: 'PNGCAT1',
        study_accession: 'PRJNA01234',
        description: 'A sample somatostatin sequence with no .pnGCAT!',
        SBOL_Glyphs: [],
      },
      {
        accession: 'PNGCAT2',
        study_accession: 'PRJNA56789',
        description: 'A sample somatostatin sequence with an existing .pnGCAT!',
        SBOL_Glyphs: [
          {
            Ontology_Term: 'three-prime-sticky-restriction-site',
            Gene_Label: '',
          },
          {
            Ontology_Term: 'location-protein',
            Gene_Label: '',
          },
          {
            Ontology_Term: 'intron',
            Gene_Label: '',
          },
        ],
      },
    ];

    searchResults.unshift(...mock);
    console.log(searchResults);
  }

  const onStepChange = (step) => {

    switch (step) {
      case 3:
        handleSearch(['', '', 'soma']);
        return;

      case 4:
        mockResults();

      default: return;
    }
  }


  return (
    <div>
      <Steps
        enabled={enabled}
        steps={steps}
        initialSetup={0}
        onAfterChange={onStepChange} // add fake search results
        onComplete={() => setEnabled(false)}
        onExit={() => setEnabled(false)}
        options={config}
      />
      {/* <Hints enabled={enabled} hints={hints} /> */}
    </div>
  );
}
