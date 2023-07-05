import { makeAutoObservable } from 'mobx'
import { Task } from '../types';

class TasksStore {

	tasks = [
		{
			id: 1,
			name: 'Task 1',
			completed: false,
			hasChildren: true,
			body: 'Текст задачи 1',
		},
		{
			id: 2,
			name: 'Task 2',
			completed: false,
			hasChildren: false,
			body: 'Текст задачи 2',
		},
		{
			id: 3,
			name: 'Task 3',
			completed: false,
			hasChildren: false,
			body: 'Текст задачи 3',
		},
	];

	currentTask: Task | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	addTask = (task: Task) => {
		this.tasks.push(task);
	}

	removeTask = (id: number) => {
		this.tasks = this.tasks.filter(task => task.id !== id);
		this.currentTask = null;
	}

	completeTask = (task: Task) => {
		task.completed = !task.completed;
	}

	setCurrentTask = (task: Task | null) => {
		this.currentTask = task;
	}
}

export default new TasksStore();