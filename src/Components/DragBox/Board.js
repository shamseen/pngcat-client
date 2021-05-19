import React from "react";

function Board(props) {
	const drop = (e) => {
		e.preventDefault();

		// var used to transfer data between event
		const card_id = e.dataTransfer.getData("card_id");

		// var used to pass the card_id var
		const card = document.getElementById(card_id);

		// makes it look like you picked up the card
		card.style.display = "block";

		// dom manipulation to set html to the other board
		e.target.appendChild(card);

		console.log(e.target);
	};

	const dragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div
			id={props.id}
			className={props.className}
			onDrop={drop}
			onDragOver={dragOver}
		>
			{props.children}
		</div>
	);
}

export default Board;
