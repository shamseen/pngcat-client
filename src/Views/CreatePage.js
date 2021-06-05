import React from "react";
import {
	DragItem, DragItemContainer,
	glyphs as glyphNames
} from "../Components";
import * as DragBoxStyle from "../Styles/DragBox.module.css";

export default function CreatePage({ handleSave, pngcat }) {
	const savePngcat = () => {
		const glyphsToSave = [];

		// grabbing all images dragged to the second board
		const cardElements = document.getElementById("pngcatBoard").childNodes;

		// storing the glyph names as strings
		// TO DO: let user label the gene
		cardElements.forEach((c) => {
			glyphsToSave.push({
				Gene_Label: "somegene",
				Ontology_Term: c.id,
			});
		});

		const cat = pngcat;
		cat.SBOL_Glyphs = glyphsToSave;

		handleSave(glyphsToSave);
		alert("Your .pnGCAT has been saved!");
	};

	return (
		<div className={DragBoxStyle.DragBox}>
			<h3 className={DragBoxStyle.header}>Build your .pnGCAT here</h3>
			<main className={DragBoxStyle.flexbox}>
				<div className={DragBoxStyle.pngcatBox}>
					<button type="button" id="save-pngcat" onClick={savePngcat}>
						Save!
					</button>
					<DragItemContainer id="pngcatBoard" className={DragBoxStyle.board}>
						{pngcat.SBOL_Glyphs.map((g, i) => {
							return (<DragItem
								key={i}
								id={g.Ontology_Term}
								className={DragBoxStyle.card}
								draggable="true"
							>
								<img
									id={g.Ontology_Term}
									src={`./assets/${g.Ontology_Term}.png`}
									alt={`${g.Ontology_Term} symbol`}
									className={DragBoxStyle.image}
								/>
							</DragItem>)
						})}
					</DragItemContainer>
				</div>
				{/* <hr /> */}
				<div className={DragBoxStyle.glyphBox}>
					<DragItemContainer
						id="glyphBank"
						className={`${DragBoxStyle.board} ${DragBoxStyle.glyphBank}`}
						style={{ overflowY: "scroll" }}
					>
						{glyphNames.map((glyph, i) => {
							return (
								<DragItem
									key={i}
									id={glyph}
									className={DragBoxStyle.card}
									draggable="true"
								>
									<img
										id={glyph}
										src={`./assets/${glyph}.png`}
										alt={`${glyph} symbol`}
										className={DragBoxStyle.image}
									/>
								</DragItem>
							);
						})}
					</DragItemContainer>
				</div>
			</main>
		</div>
	);
}
