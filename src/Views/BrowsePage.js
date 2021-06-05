import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import "../Styles/browsePage.scss";

export default function BrowsePngcats({ getAllPngcats, updateState }) {
	const baseUrl = "https://www.ebi.ac.uk/ena/browser/view";
	const { handleSelectedResult, deletePngcat } = useContext(DataContext);
	const [pngcats, setPngcats] = useState([]);

	const getCats = async () => {
		const cats = await getAllPngcats();
		setPngcats(cats);
	};

	const handleDelete = (cat) => {
		deletePngcat(cat._id);
		updateState({});
		getCats();
	};

	useEffect(async () => {
		await getCats();
	}, []);

	return (
		<div className="browserBox">
			<div className="card" id="brownsContainer">
				{pngcats.map((cat, i) => {
					return (
						<div className="browseItemContainer">
							<div className="browseItem" key={i}>
								<div className="browseText">
									<h3>{cat.Seq_Accession}</h3>
									<span>
										<a href={`/${cat.Seq_Accession}`}>
											View on the European Nucleotide Archive
										</a>
									</span>
								</div>
								<div className="browseBtns">
									<button
										onClick={() => handleSelectedResult(cat)}
										className="selectBtn"
									>
										Select
									</button>
									<button
										className="deleteBtn"
										onClick={() => handleDelete(cat)}
									>
										Delete
									</button>
								</div>
							</div>
							<hr />
						</div>
					);
				})}
			</div>
		</div>
	);
}
