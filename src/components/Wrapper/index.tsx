import { FC } from "react";
import style from './style.module.scss'

const Wrapper: FC = () => {
	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Tasks Manager</h1>

			<div className={style.container}>
				<div className={style.column}>

					<ul className={style.tasks}>
						<li>Task 1</li>
						<li>Task 2</li>
						<li>Task 3</li>
						<li>Task 4</li>
					</ul>

				</div>

				<div className={style.column}>

					<div className={style.taskBody}>
						Текст Задачи
					</div>

				</div>

			</div>

		</div>
	);
}

export default Wrapper;