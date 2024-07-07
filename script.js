/* Functions Declaration Examples */

/* Example 1 */
function print(){
    console.log("Hello");
}

console.log("---Function Declaration---");
print()

/* Hoisting property */
hi()

function hi() {
  console.log("Hello, how are you?");
}

/* Example 2 */

function printName(name="name", lastname="lastname", no="0"){
    console.log("Hello", name, lastname, no);
}
printName("Carlos", "Roberto", "3")

let lastname = "Roberto"
printName(lastname)

/* Example 3 */
