import Person from "./Person.js"; // Get link from class Person

export default class Student extends Person { // get inheritance from class Person
    setProvince(province){
        this.mProvince = province;
    }
    getProvince(){
        console.log(this.mProvince);
    }
    read(){
        console.log("I love reading!");
    }
}