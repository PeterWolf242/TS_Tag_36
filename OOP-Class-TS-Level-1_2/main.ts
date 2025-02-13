class SchoolClass {
	id: number;
	name: string;
	endDate?: string;

	constructor(id: number, name: string, enddate?: string) {
		this.id = id;
		this.name = name;
		this.endDate = enddate;

		console.log("“School class creation successful”");
	}
}

const Class_1 = new SchoolClass(1, "Math-Genius");
const Class_2 = new SchoolClass(2, "History", "2025-06-01");
const Class_3 = new SchoolClass(3, "Biologic")

console.log("Class 1: ", Class_1.name);
console.log("Class 2: ", Class_2.name);
console.log("Class 3: ", Class_3.name);

Class_1.name = "Advanced Mathematics";
Class_2.name = "middle ages";

console.log("New Name of Class 1: ", Class_1.name);
console.log("New Name of Class 2: ", Class_2.name);
