import { FC } from "react";
import style from './style.module.scss'
import TasksList from "../TasksList";
import TaskBody from "../TaskBody";

const Wrapper: FC = () => {
	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Tasks Manager</h1>

			<div className={style.container}>
				<div className={style.column}>

					<TasksList />

				</div>

				<div className={style.column}>

					<TaskBody />

				</div>

			</div>

		</div>
	);
}

export default Wrapper;