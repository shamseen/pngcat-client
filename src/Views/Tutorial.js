import React, { useState } from "react";
import { Steps, Hints } from "intro.js-react";

import "intro.js/introjs.css";
import "../Styles/tutorial.scss";


/* -- Sources
https://github.com/HiDeoo/intro.js-react#introjs-options
https://codesandbox.io/s/introjs-react-example-forked-n8yjj?file=/App.js
*/

export default function Tutorial() {
  /* -- State -- */
  const [enabled, setEnabled] = useState(true);

  const [steps] = useState([
    {
      element: "#search-btn",
      intro: "btn"
    },
    {
      element: ".Search_input__25mB2",
      intro: "keyword"
    },
    {
      element: "#results-heading",
      intro: "results"
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

  return (
    <div>
      <Steps
        enabled={enabled}
        steps={steps}
        // initialSetup={-1}
        onComplete={() => setEnabled(false)}
        onExit={() => setEnabled(false)}
        options={config}
      />
      {/* <Hints enabled={enabled} hints={hints} /> */}
    </div>
  );
}
