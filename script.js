//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name
	}
	set name(name){
		this.name = name;
	}
	set age(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${super.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${super.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
