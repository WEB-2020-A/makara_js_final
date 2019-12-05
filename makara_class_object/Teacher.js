import Person from "./Person.js"; //Get link from class Person

export default class Teacher extends Person { // Get inheritance from class Person
    setSubject(subject){
        this.mSubject = subject;
    }
    getSubject(){
        console.log(this.mSubject);
    }
    teach(){
        console.log("I love teaching!");
    }
}