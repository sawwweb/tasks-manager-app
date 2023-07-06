import { FC } from "react";
import style from "./style.module.scss";

interface TaskSearchProps {
	searchTasks: (value: string) => void
}

const TaskSearch: FC<TaskSearchProps> = ({ searchTasks }) => {
	return (
		<input
			className={style.searchInput}
			type="text"
			placeholder="Поиск"
			onChange={(e) => searchTasks(e.target.value)}
		/>
	);
}

export default TaskSearch;