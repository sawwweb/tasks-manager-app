export type Task = {
	id: number;
	name: string;
	completed: boolean;
	hasChildren: boolean;
	body: string;
}