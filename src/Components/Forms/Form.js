import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';

export default function Form({ data }) {
  // DNA sequence useState('')
  // SBOL_Glyphs useState({ data })
  // Authors useState([])
  // DOI useState(')

  // read
  // const getAllPngcats = async () => {
  //   try {
  //     const result = await fetch('url')
  //     const data = await result.json()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // create
  // const createPngcat = async () => {
  //   const body = {
  //     DNA_seg,
  //     SBOL_Glyphs,
  //     authors,
  //     DOI
  //   }
  //   try {
  //     const res = await fetch('url', {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': "application/json"
  //       },
  //       body: JSON.stringify(body)
  //     })
  //   } catch (err) {
  //     // set DNA_seg,
  //     // set Glyph,
  //     // set authors,
  //     // set DOI,
  //     console.log(err);
  //   } finally {
  //     await getAllPngcats();
  //   }
  // }

  // delete
  // const deletePngcats = async (id) => {
  //   try {
  //     const response = await fetch(`url/${id}`, {
  //       method: "DELETE"
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     await getAllPngcats();
  //   }
  // }

  // update
  // const updatePngcats = async () => {
  //   try {
  //     const result = await fetch(`url/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     await getAllPngcats();
  //   }
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    createPngcat();
  }

  // onModelChange = (e) = setModelChange(e.target.value);

  // useEffect(() => {
  //   getAllPngcats()
  // }, [])

  return (
    <div className="form-container">
      {/* <DataContext.Provide value={{
        deletePngcat,
        updatedPngcat
      }}> */}
        <form
          onsubmit={onSubmit}
          style={{
            margin: "30px",
            border: "1px solid black"
          }}
        >
          DNA Sequence:{" "}
          <input
            type="text"
            id="DNA_seg"
            placeholder="DNA Sequence"
            // onChange={/*onModelChange*/}
            // value={/*DNA_seq*/}
          />
          <br />
          SBOL Glyphs:{" "}
          <input
            type="text"
            id="SBOL_Glyphs"
            list="SBOL_Glyphs-list"
            placeholder="SBOL_Glyphs"
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs*/}
          />
            <datalist id="SBOL_Glyphs-list">
              <option value="component" />
              <option value="range" />
              <option value="path"/>
            </datalist>
          <br />
          Authors: {" "}
          <input
            type="text"
            id="authors"
            placeholder="Authors"
            // onChange={/*onModelChange*/}
            // value={/*authors*/}
          />
          <br />
          DOI: {" "}
          <input
            type="text"
            id="DOI"
            placeholder="DOI"
            // onChange={/*onModelChange*/}
            // value={/*DOI*/}
          />
          <br />
          <input type="submit" />
        </form>
      {/* </DataContext.Provide> */}
    </div>
  )
}



