import React from "react";

function DragItemContainer(props) {
	const drop = (e) => {
		e.preventDefault();
		// var used to transfer data between event
		const dragItem_id = e.dataTransfer.getData("dragItem_id");

		// var used to pass the card_id var
		const dragItem = document.getElementById(dragItem_id);

		// makes it look like you picked up the card
		dragItem.style.display = "block";

		// dom manipulation to set html to the other board
		e.target.appendChild(dragItem);
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

export default DragItemContainer;
