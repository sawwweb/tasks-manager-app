import { FC } from "react";
import style from "./style.module.scss";
import { Task } from "../../types";

interface TaskCheckboxProps {
	task: Task;
	completeTask: (task: Task) => void;
}

const TaskCheckbox: FC<TaskCheckboxProps> = ({ task, completeTask }) => {
	return (
		<label className={style.container}>
			<input
				className={style.taskCheckbox}
				type="checkbox"
				name="isCompleted"
				id={task.id.toString()}
				checked={task.completed}
				onChange={() => {
					completeTask(task);
				}}
			/>
			<span className={style.checkmark}></span>
		</label >
	);
}

export default TaskCheckbox;