import { useContext, useRef, useState } from "react";
import { Steps, Hints } from "intro.js-react";
import { DataContext } from "../App";

import "intro.js/introjs.css";
import "../Styles/tutorial.scss";


/* -- Sources
https://github.com/HiDeoo/intro.js-react#introjs-options
https://codesandbox.io/s/introjs-react-example-forked-n8yjj?file=/App.js
*/

export default function Tutorial() {
  const { handleSearch, handleSelectedResult, searchResults, setResults } = useContext(DataContext);

  /* -- State Vars -- */
  const tutorialRef = useRef(null) // for dynamically rendered elements

  const [enabled, setEnabled] = useState(false);

  const [steps] = useState([
    {
      element: "#nav-Browse",
      intro: "You can browse and edit existing diagrams (aka .pnGCATs) here. But first let's build one from an existing sequence in the European Nucleotide Archive!"
    },
    {
      element: "#search-keyword",
      intro: "Try searching by a partial keyword 'soma'"
    },
    {
      element: "#results-container",
      intro: "Let's dissect the results."
    },
    {
      element: ".result-links",
      intro: "We have links to their ENA records."
    },
    {
      element: "#new-pngcat-PNGCAT1",
      intro: "Let's select our example result.",
      position: 'top'
    },
    {
      element: "#active-seq",
      intro: "Notice the ID numbers and links"
    },
    {
      element: "#nav-create",
      intro: "All ready to go! Click here build a diagram!"
    },
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
    showStepNumbers: false,
    skipLabel: "Exit (esc)"
  };

  /* -- Functions -- */
  const mockResults = () => {
    const mock = [
      {
        accession: 'PNGCAT1',
        study_accession: 'PRJNA1',
        description: 'A sample somatostatin sequence with no .pnGCAT! :o',
        SBOL_Glyphs: [],
      },
      {
        accession: 'PNGCAT2',
        study_accession: 'PRJNA2',
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

    const newResults = [...searchResults];
    newResults.unshift(...mock);
    setResults(newResults);
    console.log(searchResults);
  }

  // doing stuff before certain things are highlighted
  const onStepChange = (next) => {

    switch (next) {
      // filling search results before highlighting container
      case 2:
        handleSearch(['', '', 'soma']);
        return;

      // adding dynamically rendered result before highlighting links
      case 3:
        tutorialRef.current.updateStepElement(next);
        mockResults();
        return;

      case 4: case 6:
        tutorialRef.current.updateStepElement(next);
        return;

      case 5: handleSelectedResult({
        "Seq_Accession": searchResults[0].accession,
        "Study_Accession": searchResults[0].study_accession,
        "SBOL_Glyphs": []
      });

      default: return;
    }
  }


  return (
    <div>
      <button type="button" id="start-tutorial" className="tutorial-btn" onClick={() => setEnabled(true)}>
        Tutorial
      </button>
      <Steps
        enabled={enabled}
        steps={steps}
        ref={tutorialRef}
        initialStep={0}
        onBeforeChange={onStepChange} // add fake search results
        onComplete={() => setEnabled(false)}
        onExit={() => setEnabled(false)}
        options={config}
      />
      {/* <Hints enabled={enabled} hints={hints} /> */}
    </div>
  );
}
