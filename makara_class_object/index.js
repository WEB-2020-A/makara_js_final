import Student from "./Student.js";
import Teacher from "./Teacher.js";

const student1 = new Student(); // creata new variable to catch data from Sutdent
const teacher1 = new Teacher(); // creata new variable to catch data from Teacher

// display data in console.
console.log("------------ Student Object ---------------");
student1.setName("Bopha")
student1.getName();
student1.setProvince("Kompong Cham");
student1.getProvince();
student1.read();
student1.speak();
console.log("------------ End --------------------------");

console.log("------------ Teacher Object ---------------");
teacher1.setName("Rady");
teacher1.getName();
teacher1.setSubject("Javascript");
teacher1.getSubject();
teacher1.teach();
teacher1.speak();
console.log("------------ End --------------------------");