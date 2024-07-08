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

// Example 4

/* const avgAge = 95;

function agePrint(age) {
  console.log(
    "The average remaining life expectancy is",
    avgAge - age,
    "years."
  );
  if (age < 10) {
    console.log("Enjoy life.");
  } else if (age < 20) {
    console.log("Time for sightseeing!");
  } else if (age < 60) {
    console.log("You have to work.");
  } else if (age < 95) {
    console.log("You're on pins and needles!");
  } else {
    console.log("Are you still alive?");
  }
}
agePrint(19); */

//! ARROW FUNCTİONS

//Example 1

/* 2 Sayının toplamı */

/* const toplam = (a, b) => (result = a + b);
toplam(5, 6);
console.log(result); */

//?SİLİNDİRİN HACMİ

/* const silindir =(r,h)=> 3.14*r**2*h
console.log(silindir(4,5).toFixed(2)); */

// 2 SAYIDAN BÜYÜK OLANI BULMA

/* const big = (a,b)=>Math.max(a,b)
console.log(big(4,5)); */

//?ASAL SAYI

/* const asal =(num)=> {
  if (num <= 1){
      console.log("sayı asal değil");
    }
  for(let i = 2; i<num; i++){
    if(num % i == 0){
      console.log("sayı asal değil");
      break
    } else if(num % num == 0 && num % 1 == 0) {
      console.log("sayı asaldır");
      break
    }
  } 
  
}
asal(13) */

//!RECURSİON FUNCTİONS

//?N KADAR SAYILARI TOPLAMA
/* const toplam=(n)=>{
  if(n<1){
    return n
  } else{
    return toplam(n-1)+n
  }
}
console.log(toplam(8)); */

//?FAKTÖRİYEL BULMA
/* const toplam = (n) => {
  if (n === 1) {
    return n;
  } else return toplam(n - 1)*n;
  
};
console.log(toplam(3)); */

//?FİBONACCİ DİZİSİ
/* const fibo=(n)=>{
  if(n <= 2){
    return 1
  }else return fibo(n-1) + fibo(n-2)
}
console.log(fibo(7)); */

//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */

/* (function(){
  console.log("merhaba");
})() */

//? PARAMETRE GÖNDERME İŞLEMİ
//**İKİ SAYININ TOPLAMINI BULMAK */
/* (function(a,b){
  console.log(a+b);
})(1,2) */

//**SAYININ ÜSSÜNÜ ALMA */
/* (function(a,b){
  console.log(Math.pow(a,b));
})(5,4) */

//! CALLBACK FUNCTİON
function matematikselislem(sayi1, sayi2, islem) {
  const sonuc = islem(sayi1, sayi2);
  console.log(sonuc);
}

function topla(a, b) {
  return a + b;
}
function cıkar(a, b) {
  return a - b;
}

matematikselislem(45, 23, topla);
matematikselislem(45, 23, cıkar);
