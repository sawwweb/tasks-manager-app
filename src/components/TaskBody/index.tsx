import { FC } from "react";
import style from './style.module.scss'
import TasksStore from "../../store/TasksStore";
import { observer } from "mobx-react-lite";

const TaskBody: FC = observer(() => {

	const { currentTask } = TasksStore;

	return (
		<div className={style.taskBody}>
			{currentTask !== null ? (
				<p>
					{currentTask.body}
				</p>
			) : (
				<span>Выберите задачу</span>
			)}
		</div>
	);
}
)
export default TaskBody;