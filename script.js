//complete this code
class Person {
	#name = "John";
	#age;
	constructor(name,age){
		this.#name = name;
		this.#age = age;
	}
	get _name(){
		return this.#name
	}
	set name(name){
		this.#name = name;
	}
	set age(age){
		this.#age = age;
	}
	get age(){
		return this.#age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
