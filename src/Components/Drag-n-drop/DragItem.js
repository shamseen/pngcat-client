import React from "react";

function DragItem(props) {
	const dragStart = (e) => {
		const target = e.target;

		// sets the data of passed card(card_id)
		e.dataTransfer.setData("dragItem_id", target.id);

		// needed so card is not invisible
		setTimeout(() => {
			target.style.display = "block";
		}, 0);
	};

	const dragOver = (e) => {
		// stops event when its dragged over
		e.stopPropagation();
	};

	// console.log(e.target);

	return (
		<div
			id={props.id}
			className='drag-item'
			draggable={props.draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
		>
			{props.children}
		</div>
	);
}

export default DragItem;
