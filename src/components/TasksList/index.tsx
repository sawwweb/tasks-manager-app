import { FC } from "react";
import style from './style.module.scss'
import TaskListItem from "../TaskListItem";
import TasksStore from "../../store/TasksStore";

interface TasksListProps {

}

const TasksList: FC<TasksListProps> = () => {

	const tasks = TasksStore.tasks;

	return (
		<ul className={style.tasks}>

			{tasks.map((task) => (
				<TaskListItem key={task.id} task={task} />
			))}

		</ul>
	);
}

export default TasksList;