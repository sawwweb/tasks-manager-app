import { makeAutoObservable } from 'mobx'

class TasksStore {

	tasks = [
		{
			id: 1,
			name: 'Task 1',
			completed: false
		},
		{
			id: 2,
			name: 'Task 2',
			completed: false
		},
		{
			id: 3,
			name: 'Task 3',
			completed: false
		},
	];

	constructor() {
		makeAutoObservable(this);
	}
}

export default new TasksStore();