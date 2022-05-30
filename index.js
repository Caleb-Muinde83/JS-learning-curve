// this is my first js code
//console.log('hello world')

//let interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

//primitives/Value types
//strings
//let name = 'Mosh';
//num
//let age = 23;
//boolean
//let isApproved = false;
//null

//let firstName = undefined;
//let selectedColor = null;

//reference types
//objects
//let person = {
//    name: 'Mosh',
//    age: 30
//};

//Dot notation to change value of variables onside an object
//person.name = 'John';

//Bracket notation to chabge the value of variables onside an object
//person['name'] = 'Mary';
//console.log(person.name);

//When we dont know the selection target property
//let selection = 'name';
//person[selection] = 'Mary';
//console.log(person.name);

//array: data structure used to present a list of objects
//list of objects
//let selectedColors = ['red', 'blue'];
//selectedColors[2] = 'green';
//selectedColors[3] = 1;
//console.log(selectedColors.length);


//function: setup statemets that performs a task or calculates a value
//performing a task
//function greet(name, lastName) { //name is parameter
//    //Body of the function
//    console.groupCollapsed('hello ' + name + ' ' + lastName);
//}

//greet('Caleb'); //Caleb is an argument for the parameter name
//greet('Mary', 'Smith');

//Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);