import React from "react";
import Board from "./Board";
import Card from "./Card";
import { glyphs as glyphNames } from "./Glyphs";
import * as DragBoxStyle from "./DragBox.module.css";

export default function DragBox({ handleSave }) {

	const savePngcat = () => {
		const glyphsToSave = [];

		// grabbing all images dragged to the second board
		const cardElements = document.getElementById('pngcat-board').childNodes;

		// storing the glyph names as strings
		// TO DO: let user label the gene
		cardElements.forEach(c => {
			glyphsToSave.push({
				"Gene_Label": "somegene",
				"Ontology_Term": c.id
			})
		});

		handleSave(glyphsToSave);
	}

	return (
		<div className={DragBoxStyle.DragBox}>
			<h3 className={DragBoxStyle.header}>Drag and Drop</h3>
			<main className={DragBoxStyle.flexbox}>
				<button type='button' id="save-pngcat" onClick={savePngcat}>Save!</button>

				<Board id="glyph-bank" className={DragBoxStyle.board}>
					{
						glyphNames.map((glyph, i) => {
							return (
								<Card key={i} id={glyph} className={DragBoxStyle.card} draggable="true">
									<img
										id={glyph}
										src={`./assets/${glyph}.png`}
										alt={`${glyph} symbol`}
										className={DragBoxStyle.image}
									/>
								</Card>
							)
						})
					}
				</Board>

				<Board id="pngcat-board" className={DragBoxStyle.board}>
				</Board>
			</main>
		</div>
	);
}
