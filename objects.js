//OBJECTS
const person = {
    //properties
    name: "Chris",
    age: 21,
    isTrue: false,

    //method
    nameCall() {
        console.log(`My name is ${this.name}`);
    }
}

// console logging the object
person.nameCall()
console.log(person)

//changing the age
person.age = 23;
console.log(person.age)

//access name with dot notation
console.log(person.name)

//access name with bracket notation
console.log(person["name"])

//CLASSES
class Person {
    constructor(name, age, isTrue) {
        this.name = name;
        this.age = age;
        this.isTrue = isTrue;
    }
    nameCall() {
        console.log(`My name is ${this.name}`)
    }
}
//console logging the class
console.log(Person)

// create an instance of the Person class
const chris = new Person("Chris", 21, false)

//console log the instance
console.log(chris)

//console.log the method of in the object
chris.nameCall();

//JSON stringify converts and object to a string
let data1 = {name: "John Doe", age: 30}
let json1 = JSON.stringify(data1)
console.log(json1)

//JSON parse converts a string to object in Javascript
let json2 = `{"name": "John Doe", "age": 30}`
let data2 = JSON.parse(json2)
console.log(data2)

// HTTPS REQUEST - want to access https webpages not http as http is not secure
//CRUD
//CREATE
//READ
//UPDATE
//DELETE

//GET - JSON is easy to transport as lightweight data, when you're getting something from something you want to use JSON
//PUT
//DELETE

//DEBUGGING
// TRY CATCH Finally
//Errors in the try block are caught in the catch block

try {
    let user = `{"age":30}`
    let userObj = JSON.parse(user)

    if(!userObj.name) {
        console.log(user.userObj.name)
        throw new SyntaxError("Incomplete data: no name")
    }
} catch(e) {
    console.log(`JSON Error: ${e.message}`)
} finally {
    console.log("Finally runs regardless of the result")
}
