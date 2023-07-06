import { FC, useState } from "react";
import style from './style.module.scss'
import { Task } from "../../types";
import { observer } from "mobx-react-lite";

interface TaskListItemProps {
	task: Task
	completeTask: (task: Task) => void
	removeTask: (id: number, parentTask: Task | null) => void
	setCurrentTask: (task: Task | null) => void
	parentTask: Task
}

const TaskListItem: FC<TaskListItemProps> = observer(({ task, completeTask, removeTask, setCurrentTask, parentTask }) => {

	const [open, setOpen] = useState(false);

	return (
		<li className={style.task} onClick={
			(e) => {
				e.stopPropagation();
				setCurrentTask(task)
			}
		}>
			<div className={style.mainTask}>
				{task.subtasks?.length > 0 && (
					<span className={style.taskToggle} onClick={
						() => {
							setOpen(!open);
						}
					}>
						{
							open ? '-' : '+'
						}
					</span>
				)}
				<div className={style.taskTitle}>
					{task.name}
				</div>

				{task.completed && (
					<button className={style.taskRemove} onClick={(e) => {
						e.stopPropagation();
						removeTask(task.id, parentTask);
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
			</div>
			{
				task.subtasks && (
					<ul className={style.subtasks + (open ? '' : ' hide')}>
						{task.subtasks.map((subtask) => (
							<TaskListItem
								key={subtask.id}
								task={subtask}
								completeTask={completeTask}
								removeTask={removeTask}
								setCurrentTask={setCurrentTask}
								parentTask={task}
							/>
						))}
					</ul>
				)
			}
		</li >
	);
}
)
export default TaskListItem;