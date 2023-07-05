import { FC } from "react";
import style from './style.module.scss'
import TaskListItem from "../TaskListItem";
import TasksStore from "../../store/TasksStore";
import { observer } from "mobx-react-lite";

interface TasksListProps {

}

const TasksList: FC<TasksListProps> = observer(() => {

	const { tasks, addTask, completeTask, removeTask, setCurrentTask } = TasksStore;

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
			<button className={style.addTask} onClick={
				() => addTask(
					{
						id: tasks.length + 1,
						name: 'Task ' + (tasks.length + 1).toString(),
						completed: false,
						hasChildren: false,
						body: 'Текст задачи ' + (tasks.length + 1).toString()
					}
				)
			}>
				Добавить
			</button>
		</>
	);
}
)
export default TasksList;