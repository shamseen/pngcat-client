import React from "react";

function Card(props) {
	const dragStart = (e) => {
		const target = e.target;

		e.dataTransfer.setData("card_id", target.id);

		setTimeout(() => {
			target.style.display = "block";
		}, 0);
	};

	const dragOver = (e) => {
		e.stopPropagation();
	};

	// console.log(e.target);

	return (
		// <div>
		// 	<img
		// 		id={props.id}
		// 		src={props.src}
		// 		className={props.className}
		// 		draggable={props.draggable}
		// 		onDragStart={dragStart}
		// 		onDragOver={dragOver}
		// 	>
		// 		{props.children}
		// 	</img>
		// </div>

		<div
			id={props.id}
			className={props.className}
			draggable={props.draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
		>
			{props.children}
		</div>
	);
}

export default Card;
