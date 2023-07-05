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
	}

	addTask = (task: Task) => {
		this.tasks.push(task);
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