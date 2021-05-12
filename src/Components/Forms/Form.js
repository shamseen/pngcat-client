import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import * as formStyle from './Form.module.css'

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
    <div className={formStyle.formContainer}>
      {/* <DataContext.Provide value={{
        deletePngcat,
        updatedPngcat
      }}> */}
      <h2 className={formStyle.header}>Form</h2>
        <form
          onsubmit={onSubmit}
        >
          DNA Sequence:{" "}
          <input
            className={formStyle.input}
            type="text"
            id="DNA_seg"
            placeholder="DNA Sequence"
            // onChange={/*onModelChange*/}
            // value={/*DNA_seq*/}
          />
          <br />
          <br />
          Glyphs:{" "}
          <input
            className={formStyle.input}
            type="text"
            id="SBOL_Glyphs"
            placeholder="SBOL_Glyphs"
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs*/}
          />
          <br />
          Component:{" "}
          <input
            className={formStyle.input}
            type="text"
            id="component"
            placeholder="functional component"
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs.component*/}
          />
          <br />
          Range:{" "}
          <input
            className={formStyle.input}
            type="text"
            id="range"
            placeholder="range"
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs.range*/}
          />
          <br />
          Path:{" "}
          <input
            className={formStyle.input}
            type="text"
            id="path"
            placeholder="image path"
            // onChange={/*onModelChange*/}
            // value={/*SBOL_Glyphs.path*/}
          />
          <br />
          <br />
          Authors: {" "}
          <input
            className={formStyle.input}
            type="text"
            id="authors"
            placeholder="Authors"
            // onChange={/*onModelChange*/}
            // value={/*authors*/}
          />
          <br />
          <br />
          DOI: {" "}
          <input
            className={formStyle.input}
            type="text"
            id="DOI"
            placeholder="DOI"
            // onChange={/*onModelChange*/}
            // value={/*DOI*/}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      {/* </DataContext.Provide> */}
    </div>
  )
}



