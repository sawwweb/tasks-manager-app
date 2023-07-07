import { FC } from "react";
import ThemeStore from "../../store/ThemeStore";
import { observer } from "mobx-react-lite";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import style from "./style.module.scss";

interface ThemeSwitcherProps {

}

const ThemeSwitcher: FC<ThemeSwitcherProps> = observer(() => {

	const { theme, themeChange } = ThemeStore;

	return (
		<div className={style.themeSwitcher}>
			{theme === 'light' ? (
				<div onClick={() => themeChange()}>
					<FaRegMoon />
				</div>
			) : (
				<div onClick={() => themeChange()}>
					<FaRegSun />
				</div>
			)}
		</div>
	);
}
)
export default ThemeSwitcher;