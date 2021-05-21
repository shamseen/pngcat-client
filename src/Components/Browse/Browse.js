import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import * as browseStyle from './Browse.module.css';

export default function BrowsePngcats({ getAllPngcats, updateState }) {
  const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';
  const { handleSelectedResult, deletePngcat } = useContext(DataContext);
  const [pngcats, setPngcats] = useState([]);

  const getCats = async () => {
    const cats = await getAllPngcats();
    setPngcats(cats);
  }

  const handleDelete = (cat) => {
    deletePngcat(cat._id);
    updateState({});
    getCats();
  }

  useEffect(async () => {
    await getCats();
  }, [])

  return (
    <div className={browseStyle.browseContainer}>

      {
        pngcats.map((cat, i) => {
          return (
            <div className="browseItemContainer">
              <div className={browseStyle.browseItem} key={i}>
                <div className="browseText">
                  <h3>{cat.Seq_Accession}</h3>
                  <span>
                    <a href={`${baseUrl}/${cat.Seq_Accession}`}>View on the European Nucleotide Archive</a>
                  </span>
                </div>
                <div className="browseBtns">
                  <button onClick={() => handleSelectedResult(cat)}
                    className={`${browseStyle.browseBtn} ${browseStyle.selectBtn}`}>
                    Select
                    </button>
                  <button className={`${browseStyle.browseBtn} ${browseStyle.deleteBtn}`} onClick={() => handleDelete(cat)}>Delete</button>
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