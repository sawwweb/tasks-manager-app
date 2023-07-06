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

	const addTaskHandler = () => {
		if (taskName && taskBody) {
			addTask({
				id: Date.now(),
				name: taskName,
				completed: false,
				body: taskBody,
			})
			setTaskName('');
			setTaskBody('');
		} else {
			alert('Заполните все поля');
		}
	}

	const addSubTaskHandler = (currentTask: Task) => {
		if (taskName && taskBody) {
			addSubtask(currentTask, {
				id: Date.now(),
				name: taskName,
				completed: false,
				body: taskBody,
			})
			setTaskName('');
			setTaskBody('');
		} else {
			alert('Заполните все поля');
		}
	}

	return (
		<div className={style.addBlock}>
			<div>Добавить задачу</div>
			<input
				type="text"
				value={taskName}
				className={style.addTaskInput}
				placeholder="Название задачи"
				onChange={(e) => {
					setTaskName(e.target.value);
				}}
			/>
			<textarea
				value={taskBody}
				className={style.addTaskTextarea}
				placeholder="Описание задачи"
				onChange={(e) => {
					setTaskBody(e.target.value);
				}}
			></textarea>

			<div className={style.addBlockButtons}>

				<button
					className={style.addTask}
					onClick={() => addTaskHandler()}
				>
					Добавить задачу
				</button>
				{currentTask && (
					<button
						className={style.addTask}
						onClick={() => addSubTaskHandler(currentTask)}
					>
						Добавить подзадачу
					</button>
				)}

			</div>

		</div >
	);
}

export default TaskForm;