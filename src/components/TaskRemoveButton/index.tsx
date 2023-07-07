import { FC } from "react";
import style from "./style.module.scss";
import { Task } from "../../types";

import { FaTrashCan } from "react-icons/fa6";

interface TaskRemoveBtnProps {
	removeTask: (id: number, parentTask: Task | null) => void;
	taskId: number;
	parentTask: Task | null;
}

const TaskRemoveBtn: FC<TaskRemoveBtnProps> = (
	{
		removeTask, taskId, parentTask
	}
) => {
	return (
		<div
			className={style.taskRemove}
			onClick={(e) => {
				e.stopPropagation();
				removeTask(taskId, parentTask);
			}}
		>
			<FaTrashCan />
		</div>
	);
}

export default TaskRemoveBtn;