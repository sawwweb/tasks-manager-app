import { FC, useEffect } from "react";
import style from './style.module.scss'
import TaskListItem from "../TaskListItem";
import TasksStore from "../../store/TasksStore";
import { observer } from "mobx-react-lite";
import TaskForm from "../TaskForm";

interface TasksListProps {

}

const TasksList: FC<TasksListProps> = observer(() => {

	const { addTask, addSubtask, completeTask, removeTask, setCurrentTask, currentTask, searchTasks, searchResults } = TasksStore;

	useEffect(() => {
		searchTasks("");
	}, [])

	return (
		<>
			<ul className={style.tasks}>

				{searchResults.map((task) => (
					<TaskListItem
						key={task.id}
						task={task}
						completeTask={completeTask}
						removeTask={removeTask}
						currentTask={currentTask}
						setCurrentTask={setCurrentTask}
						parentTask={null}
					/>
				))}

				{searchResults.length === 0 && (
					<li>Ничего не найдено</li>
				)}

			</ul>

			<TaskForm addTask={addTask} addSubtask={addSubtask} currentTask={currentTask} />

		</>
	);
}
)
export default TasksList;