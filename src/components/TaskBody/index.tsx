import { FC } from "react";
import style from './style.module.scss'

interface TaskBodyProps {

}

const TaskBody: FC<TaskBodyProps> = () => {
	return (
		<div className={style.taskBody}>
			Текст Задачи
		</div>
	);
}

export default TaskBody;