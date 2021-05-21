import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import * as browseStyle from './Browse.module.css';

export default function BrowsePngcats({ getAllPngcats }) {
  const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';
  const { handleSelectedResult } = useContext(DataContext);
  const [pngcats, setPngcats] = useState([]);

  useEffect(async () => {
    const cats = await getAllPngcats();

    setPngcats(cats);
  }, [])

  return (
    <div className={browseStyle.browseContainer}>

      {
        pngcats.map((p, i) => {
          return (
            <div className="browseItemContainer">
              <div className={browseStyle.browseItem} key={i}>
                <div className="browseText">
                  <h3>{p.Seq_Accession}</h3>
                  <span>
                    <a href={`${baseUrl}/${p.Seq_Accession}`}>View on the European Nucleotide Archive</a>
                  </span>
                </div>
                <div className="browseBtns">
                  <button onClick={() => handleSelectedResult(p)}
                    className={`${browseStyle.browseBtn} ${browseStyle.selectBtn}`}>
                    Select
                    </button>
                  <button className={`${browseStyle.browseBtn} ${browseStyle.deleteBtn}`}>Delete</button>
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}