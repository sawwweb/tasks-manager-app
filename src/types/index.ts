export type Task = {
	id: number;
	name: string;
	completed: boolean;
	body: string;
	subtasks?: Task[];
	parentTask?: Task;
}