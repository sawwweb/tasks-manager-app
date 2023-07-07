import { makeAutoObservable } from 'mobx'

class ThemeStore {

	constructor() {
		makeAutoObservable(this);
		this.loadThemeFromLocalStorage();
	}

	theme = 'light';

	themeChange = () => {
		this.theme = this.theme === 'light' ? 'dark' : 'light';

		this.attributeHandler();

		this.saveThemeToLocalStorage();
	}


	saveThemeToLocalStorage = () => {
		localStorage.setItem('theme', JSON.stringify(this.theme));
	};

	loadThemeFromLocalStorage = () => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			this.theme = JSON.parse(savedTheme);
		}

		this.attributeHandler();

	};

	attributeHandler = () => {
		if (this.theme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}

}

export default new ThemeStore();