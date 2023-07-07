import { FC } from "react";
import style from "./style.module.scss";
import { FaSearch } from "react-icons/fa";

interface TaskSearchProps {
	searchTasks: (value: string) => void
}

const TaskSearch: FC<TaskSearchProps> = ({ searchTasks }) => {
	return (
		<label className={style.searchLabel}>
			<FaSearch />
			<input
				className={style.searchInput}
				type="text"
				placeholder="Поиск"
				onChange={(e) => searchTasks(e.target.value)}
			/>
		</label>
	);
}

export default TaskSearch;