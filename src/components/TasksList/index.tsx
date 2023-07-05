import { FC } from "react";
import style from './style.module.scss'
import TaskListItem from "../TaskListItem";
import TasksStore from "../../store/TasksStore";
import { observer } from "mobx-react-lite";
import TaskForm from "../TaskForm";

interface TasksListProps {

}

const TasksList: FC<TasksListProps> = observer(() => {

	const { tasks, addTask, addSubtask, completeTask, removeTask, setCurrentTask, currentTask } = TasksStore;

	return (
		<>
			<ul className={style.tasks}>

				{tasks.map((task) => (
					<TaskListItem
						key={task.id}
						task={task}
						completeTask={completeTask}
						removeTask={removeTask}
						setCurrentTask={setCurrentTask}
					/>
				))}

			</ul>

			<TaskForm addTask={addTask} addSubtask={addSubtask} currentTask={currentTask} />

		</>
	);
}
)
export default TasksList;