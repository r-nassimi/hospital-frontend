import { useState } from "react";
import moment from "moment";
import _ from "lodash";
import deleteLogo from "src/logos/delete.svg";

const Filter = ({ list, setList, hideFilter }) => {
	const [startDate, setStartDate] = useState("");
	const [finalDate, setFinalDate] = useState("");
	const [newList, setNewList] = useState(list);

	const filterFunction = () => {
		let filteredList = [];
		if (startDate && !finalDate) {
			filteredList = newList.filter(item =>
				moment(item.date).isAfter(startDate, finalDate, "date", "[]")
			);
		}
		if (!startDate && finalDate) {
			filteredList = newList.filter(item =>
				moment(item.date).isBetween(startDate, finalDate, "date", "[]")
			);
		}
		setList(filteredList);
	}

	const closeFilter = () => {
		hideFilter();
		setNewList("")
	}

	return (
		<div className="filter">
			<div className="filter__value">
				<p>Добавить фильтр по дате</p>
			</div>
			<div className="filter__container">
				<div className="filter__container__input">
					<p>с:</p>
					<input
						onChange={(e) => setStartDate(e.target.value)}
						type="date"
					/>
				</div>
				<div className="filter__container__input">
					<p>по:</p>
					<input
						onChange={(e) => setFinalDate(e.target.value)}
					/>
				</div>
				<button
					className="filter__container__button"
					onClick={filterFunction}>
					Фильтровать
				</button>
				<button
					className="filter__container__button"
					onClick={closeFilter}
				>
					<img
						src={deleteLogo}
					/>
				</button>
			</div>
		</div>
	)
}

export default Filter; 