import { FC } from "react";
import style from './style.module.scss'
import TasksStore from "../../store/TasksStore";
import { observer } from "mobx-react-lite";

interface TaskBodyProps {

}

const TaskBody: FC<TaskBodyProps> = observer(() => {

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