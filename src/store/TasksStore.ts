import { makeAutoObservable } from 'mobx'
import { Task } from '../types';

class TasksStore {

	tasks = [
		{
			id: 1,
			name: 'Задача 1',
			completed: false,
			body: 'Текст задачи 1',
			subtasks: [
				{
					id: 11,
					name: 'Задача 1.1',
					completed: false,
					body: 'Текст задачи 1.1',
					subtasks: [
						{
							id: 111,
							name: 'Задача 1.1.1',
							completed: false,
							body: 'Текст задачи 1.1.1',
						}
					]
				}
			]
		},
		{
			id: 2,
			name: 'Задача 2',
			completed: false,
			body: 'Текст задачи 2',
		},
		{
			id: 3,
			name: 'Задача 3',
			completed: false,
			body: 'Текст задачи 3',
		},
	];

	currentTask: Task | null = null;

	constructor() {
		makeAutoObservable(this);
		this.loadTasksFromLocalStorage();
	}

	addTask = (task: Task) => {
		this.tasks.push(task);
		this.saveTasksToLocalStorage();
	}

	addSubtask = (currentTask: Task, subtask: Task) => {
		if (currentTask === null) {
			return
		} else if (!currentTask.subtasks) {
			currentTask.subtasks = []
			currentTask.subtasks.push(subtask);
		} else {
			currentTask.subtasks.push(subtask);
		}
		this.saveTasksToLocalStorage();
	}

	removeTask = (id: number, parentTask: Task | null = null) => {
		if (parentTask === null) {
			this.tasks = this.tasks.filter(task => task.id !== id);
		} else if (parentTask.subtasks) {
			parentTask.subtasks = parentTask.subtasks.filter(subtask => subtask.id !== id);
		}
		if (this.currentTask?.id === id) {
			this.currentTask = null;
		}
		this.saveTasksToLocalStorage();
	};

	completeTask = (task: Task) => {
		task.completed = !task.completed;

		if (task.subtasks) {
			for (const subtask of task.subtasks) {
				this.completeTask(subtask);
			}
		}
		this.saveTasksToLocalStorage();
	}

	setCurrentTask = (task: Task | null) => {
		this.currentTask = task;
	}

	saveTasksToLocalStorage = () => {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
	};

	loadTasksFromLocalStorage = () => {
		const savedTasks = localStorage.getItem('tasks');
		if (savedTasks) {
			this.tasks = JSON.parse(savedTasks);
		}
	};

}

export default new TasksStore();