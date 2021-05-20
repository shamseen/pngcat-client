import React, { useState, useRef } from "react";
import * as imgUploaderStyle from "./ImageUploader.module.css";

const ImageUploader = () => {
	const [image, setImage] = useState(null);
	const [previewUrl, setPreviewUrl] = useState("");

	const handleFile = (file) => {
		setImage(file);
		setPreviewUrl(URL.createObjectURL(file));
	};

	const handleOndragOver = (e) => {
		e.preventDefault();
	};

	const handleOndrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const imageFile = e.dataTransfer.files[0];
		handleFile(imageFile);
	};

	const fileInput = useRef(null);

	return (
		<div className={imgUploaderStyle.wrapper}>
			<div
				className={imgUploaderStyle.drop_zone}
				onDragOver={handleOndragOver}
				onDrop={handleOndrop}
				onClick={() => fileInput.current.click()}
			>
				<p className={imgUploaderStyle.p}>Drag and drop image here...</p>
				<input
					type="file"
					accept="image/*"
					ref={fileInput}
					hidden
					onChange={(e) => handleFile(e.target.files[0])}
				/>
			</div>
			{previewUrl && (
				<div className={imgUploaderStyle.image}>
					{" "}
					<img src={previewUrl} alt="image" width="200" />
					<span>{image.name}</span>
				</div>
			)}
		</div>
	);
};

export default ImageUploader;
