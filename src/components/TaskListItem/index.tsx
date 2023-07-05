import { FC } from "react";
import style from './style.module.scss'

interface TaskListItemProps {
	task: {
		id: number;
		name: string;
		completed: boolean;
	}
}

const TaskListItem: FC<TaskListItemProps> = ({ task }) => {
	return (
		<li className={style.task}>
			<span className={style.taskToggle}>
				+
			</span>
			<div className={style.taskTitle}>
				{task.name}
			</div>
			<input
				className={style.taskCheckbox}
				type="checkbox"
				name="isCompleted"
				id={task.id.toString()}
				checked={task.completed}
			/>
		</li>
	);
}

export default TaskListItem;