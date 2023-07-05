import { FC } from "react";
import style from './style.module.scss'
import { Task } from "../../types";
import { observer } from "mobx-react-lite";

interface TaskListItemProps {
	task: Task
	completeTask: (task: Task) => void
	removeTask: (id: number) => void
	setCurrentTask: (task: Task | null) => void
}

const TaskListItem: FC<TaskListItemProps> = observer(({ task, completeTask, removeTask, setCurrentTask }) => {
	return (
		<li className={style.task} onClick={
			(e) => {
				e.stopPropagation();
				setCurrentTask(task)
			}
		}>
			{task.hasChildren && (
				<span className={style.taskToggle}>
					+
				</span>
			)}
			<div className={style.taskTitle}>
				{task.name}
			</div>

			{task.completed && (
				<button className={style.taskRemove} onClick={(e) => {
					e.stopPropagation();
					removeTask(task.id);
				}}>Удалить</button>
			)}

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
		</li>
	);
}
)
export default TaskListItem;