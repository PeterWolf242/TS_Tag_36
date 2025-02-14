const students: Person[] = [
	{
		id: 1,
		firstName: "Klaus",
		lastName: "Huber",
		birthday: "1996-05-17"
	},
	{
		id: 2,
		firstName: "Bärbel",
		lastName: "Widemaier",
		birthday: "1986-02-7"
	},
	{
		id: 3,
		firstName: "Peter",
		lastName: "Sibblehuber",
		birthday: "2005-09-07"
	}
]

class Person  {
	id: number;
	firstName: string;
	lastName: string;
	birthday: string;

	constructor(id: number, firstName: string, lastName: string, birthday: string) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;

		console.log("“School class creation successful”");
	}
}

class SchoolClass {
	id: number;
	name: string;
	endDate?: string;
	personArray: Person[];

	constructor(id: number, name: string, personArray:Person[], enddate?: string) {
		this.id = id;
		this.name = name;
		this.endDate = enddate;
		this.personArray = personArray;

		console.log("“School class creation successful”");
	}
}

const class_1 = new SchoolClass(1, "Math-Genius", students);
const class_2 = new SchoolClass(2, "History", students, "2025-06-01");
const class_3 = new SchoolClass(3, "Biologic", students)

console.log("Class 1: ", class_1);
console.log("Class 2: ", class_2.name);
console.log("Class 3: ", class_3.name);

class_1.name = "Advanced Mathematics";
class_2.name = "middle ages";

const newPerson = new Person(1, "Klaus", "Huber", "1996-05-17");

class_1.personArray.push(newPerson);

console.log("Neue Klasse 1: ", class_1);

console.log("New Name of Class 1: ", class_1.name);
console.log("New Name of Class 2: ", class_2.name);
