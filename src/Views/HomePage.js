import { useState } from "react";
import { Search } from "../Components";
import Tutorial from "./Tutorial";


export default function HomePage() {
  const [runTutorial, startTutorial] = useState(false);


  return (
    <div id="homepage">
      <Tutorial />
      <Search />
    </div>
  )
}