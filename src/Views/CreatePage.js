import React from "react";
import {
	DragItem, DragItemContainer,
	glyphs as glyphNames
} from "../Components";
import "../Styles/createPage.scss";

export default function CreatePage({ handleSave, pngcat }) {
	const savePngcat = () => {
		const glyphsToSave = [];

		// grabbing all images dragged to the second board
		const cardElements = document.getElementById("pngcatBoard").childNodes;
		{/* #pngcat */ }

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
		<div id="createPage">
			<h3>Build your .pnGCAT here</h3>
			<main>

				<div id='pngcat-container' className="card">
					<button type="button" id="save-pngcat" onClick={savePngcat}>
						Save!
					</button>

					<DragItemContainer id="pngcat" className='drag-items-container'>
						{pngcat.SBOL_Glyphs.map((g, i) => {
							return (<DragItem
								key={i}
								id={g.Ontology_Term}
								draggable="true"
							>
								<img
									id={g.Ontology_Term}
									src={`./assets/${g.Ontology_Term}.png`}
									alt={`${g.Ontology_Term} symbol`}
								/>
							</DragItem>)
						})}
					</DragItemContainer>
				</div>
				{/* <hr /> */}

				<div className='glyph-bank-container'>
					{/* */}
					<DragItemContainer
						id="glyph-bank"
						className='drag-items-container'
					>
						{glyphNames.map((glyph, i) => {
							return (
								<DragItem
									key={i}
									id={glyph}
									draggable="true"
								>
									<img
										id={glyph}
										src={`./assets/${glyph}.png`}
										alt={`${glyph} symbol`}
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
