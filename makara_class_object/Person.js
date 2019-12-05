// Class Person is the super class
// We export Person to give inheritance
export default class Person{
    setName(name){ // function to set name
        this.mName = name; // manage the name 
    }
    getName(){
        console.log(this.mName); 
    }
    speak(){
        console.log("Speaking");
    }
}