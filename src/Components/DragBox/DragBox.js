import React from "react";
import Board from "./Board";
import Card from "./Card";
import { glyphs } from "./Glyphs";
import * as DragBoxStyle from "./DragBox.module.css";

export default function DragBox() {
	return (
		<div className={DragBoxStyle.DragBox}>
			<h3 className={DragBoxStyle.header}>Drag and Drop</h3>
			<main className={DragBoxStyle.flexbox}>
				<Board id="glyph-bank" className={DragBoxStyle.board}>
					{
						glyphs.map((glyph, i) => {
							return (
								<Card key={i} id={`card-${i}`} className={DragBoxStyle.card} draggable="true">
									<img
										id={`card-${i}`}
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
