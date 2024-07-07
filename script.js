/* Functions Declaration Examples */

/* Example 1 */

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

/* Example 2 */

/* function printName(name="name", lastname="lastname", no="0"){
    console.log("Hello", name, lastname, no);
}
printName("Carlos", "Roberto", "3")

let lastname = "Roberto"
printName(lastname) */

/* Example 3 */

/* function numbers(n1,n2){
    console.log(arguments);
}

numbers(1,2,3,4,5,6,7,8,9,0) */

/* Example 4 Return keyword*/
function ageCalculate(name, date){
    console.log("My name is", name,"my age", (2024-date));
    let age = 2024 - date
    return age
}
ageCalculate("Guti",1990)

const age = ageCalculate("Ronaldo", 1985)

if (age > 30){
    console.log("You're at the top of soccer.");
}