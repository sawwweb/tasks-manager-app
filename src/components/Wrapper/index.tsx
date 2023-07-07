import { FC } from "react";
import style from './style.module.scss'
import TasksList from "../TasksList";
import TaskBody from "../TaskBody";
import TaskSearch from "../TaskSearch";
import TasksStore from "../../store/TasksStore";
import ThemeSwitcher from "../ThemeSwitcher";
import TaskForm from "../TaskForm";
import { observer } from "mobx-react-lite";

const Wrapper: FC = observer(() => {

	const { searchTasks, addTask, addSubtask, currentTask } = TasksStore;

	return (
		<div className={style.wrapper}>

			<div className={style.header}>
				<h1 className={style.title}>Менеджер задач</h1>

				<ThemeSwitcher />

				<TaskSearch searchTasks={searchTasks} />
			</div>

			<div className={style.container}>
				<div className={style.column}>

					<TasksList />

				</div>

				<div className={style.column}>

					<TaskBody />

					<TaskForm
						addTask={addTask}
						addSubtask={addSubtask}
						currentTask={currentTask}
					/>

				</div>

			</div>

		</div>
	);
}
)
export default Wrapper;