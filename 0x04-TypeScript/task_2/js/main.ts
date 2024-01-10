export interface DirectorInterface {
	workFromHome() : string;
	getCoffeeBreak() : string;
	workDirectorTasks() : string;
};

export interface TeacherInterface {
	workFromHome() : string;
	getCoffeeBreak() : string;
	workTeacherTasks() : string;
}

export class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home";
	}
	getCoffeeBreak() {
		return "Getting a coffee break";
	}
	workDirectorTasks() {
		return "Getting to director tasks";
	}
};

export class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}
	getCoffeeBreak() {
		return "Cannot have a break";
	}
	workTeacherTasks() {
		return "getting to work"
	}
}

export function createEmployee(salary: number | string): Director|Teacher {
	if	(typeof(salary) === "number") {
		if (salary < 500) 
			return new Teacher();
	}
	return new Director();
}

export function isDirectory(employee: Teacher | Director): any {
	if (typeof(employee) === Director){
		return true;
	}
	return false;
}

export function executeWork(employee: Teacher | Director): string {
	if (typeof(employee) === "director") {
		employee.workDirectorTasks();
	} else {
		employee.workTeacherTasks();
	}
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: string):string {
	if (todayClass === "Math"){
		return "Teaching Math";
	}
	if (todayClass === "History") {
		return "Teaching History";
	}
}