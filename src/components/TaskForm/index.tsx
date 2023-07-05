import { FC, useState } from "react";
import style from './style.module.scss'
import { Task } from "../../types";

interface TaskFormProps {
	currentTask: Task | null
	addTask: (task: Task) => void
	addSubtask: (task: Task, subtask: Task) => void
}

const TaskForm: FC<TaskFormProps> = ({ addTask, addSubtask, currentTask }) => {

	const [taskName, setTaskName] = useState('');
	const [taskBody, setTaskBody] = useState('');

	return (
		<div className={style.addBlock}>
			<input
				type="text"
				value={taskName}
				className={style.addTaskInput}
				placeholder="Название задачи"
				onChange={(e) => {
					setTaskName(e.target.value);
				}}
			/>
			<input
				type="text"
				value={taskBody}
				className={style.addTaskInput}
				placeholder="Описание задачи"
				onChange={(e) => {
					setTaskBody(e.target.value);
				}}
			/>
			<button
				className={style.addTask}
				onClick={() => {
					addTask(
						{
							id: Date.now(),
							name: taskName,
							completed: false,
							body: taskBody,
						}
					)
					setTaskName('');
					setTaskBody('');
				}
				}
			>
				Добавить задачу
			</button>
			{currentTask && (
				<button
					className={style.addTask}
					onClick={() => {
						addSubtask(currentTask, {
							id: Date.now(),
							name: taskName,
							completed: false,
							body: taskBody,
						})

						setTaskName('');
						setTaskBody('');
					}
					}
				>
					Добавить подзадачу
				</button>
			)}
		</div >
	);
}

export default TaskForm;