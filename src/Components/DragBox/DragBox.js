import React from "react";
import Board from "./Board";
import Card from "./Card";
import * as DragBoxStyle from "./DragBox.module.css";

function DragBox() {
	return (
		<div className={DragBoxStyle.DragBox}>
			<h3 className={DragBoxStyle.header}>Drag and Drop</h3>
			<main className={DragBoxStyle.flexbox}>
				<Board id="board-1" className={DragBoxStyle.board}>
					<Card id="card-1" className={DragBoxStyle.card} draggable="true">
						{/* <p>Glyph 1</p> */}
						<img
							src="https://img.fireden.net/ic/image/1584/74/1584745629905.jpg"
							alt="depressed wojack"
							width="100"
							height="100"
							id="card-1"
							className={DragBoxStyle.image}
						/>
					</Card>
				</Board>

				<Board id="board-2" className={DragBoxStyle.board}>
					<Card id="card-2" className={DragBoxStyle.card} draggable="true">
						{/* <p>Glyph 2</p> */}
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F37i3fq.png&f=1&nofb=1"
							alt="doomer wojack"
							width="100"
							height="100"
							id="card-2"
							className={DragBoxStyle.image}
						/>
					</Card>
				</Board>
			</main>
		</div>
	);
}

export default DragBox;
