/* Functions Declaration Examples */

//Example 1

/* function print(){
    console.log("Hello");
}

console.log("---Function Declaration---");
print()

/* Hoisting property */

/* hi()

function hi() {
  console.log("Hello, how are you?");
} */

//Example 2

/* function printName(name="name", lastname="lastname", no="0"){
    console.log("Hello", name, lastname, no);
}
printName("Carlos", "Roberto", "3")

let lastname = "Roberto"
printName(lastname) */

//Example 3

/* function numbers(n1,n2){
    console.log(arguments);
}

numbers(1,2,3,4,5,6,7,8,9,0) */

//Example 4 Return keyword
/* function ageCalculate(name, date){
    console.log("My name is", name,"my age", (2024-date));
    let age = 2024 - date
    return age
}
ageCalculate("Guti",1990)

const age = ageCalculate("Ronaldo", 1985)

if (age > 30){
    console.log("You're at the top of soccer.");
} */

//Example 5 İf-Return

/* function ageCalculate(name, date) {
  console.log("My name is", name, "my age", 2024 - date);
  let age = 2024 - date;
  
  if(age < 40){
    return "Play Football"
  }
  else {
    return "Play not."
  }
}

const ronaldo=ageCalculate("Ronaldo",1985)
console.log(ronaldo); */

//Example 6 circumference of the circle (2*pi*r)

/* function circle(r) {
  return 2*3.14*r
}
const result = circle(5)
console.log(result.toFixed(2)) */

//Example 7 area of the circle

/* function circleArea(r){
    return 3.14*(r*r)
}
const result = circleArea(5)
console.log(result.toFixed(2)); */

/* Function Expession (not Hoisting) */

// Example 1 

/* console.log("---Function Expression---");

const namePrint = function (name) {
  console.log(name);
};
namePrint("Messi"); */


// Example 2 

/* const isEvenOdd = function(num){
    let result=num %2 == 0 ? "Num is Even" : "Num is Odd"
    console.log(result);
    return result
}
console.log(isEvenOdd(27)) */

// Example 3 

/* const maxNum = function(num1,num2,num3){
    let result= Math.max(num1,num2,num3)
    console.log(result);
}

console.log(maxNum(12,53,44)); */