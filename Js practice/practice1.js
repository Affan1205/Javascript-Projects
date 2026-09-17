// Q1
// let a = 10;
// let b = 3;
// console.log(a + b);//12
// console.log(a - b);//7
// console.log(a * b);//30
// console.log(a / b);//3.33
// console.log(a % b);//1

// Q2

// let x = 10;

// x += 5;
// console.log(x);//15

// x -= 3;
// console.log(x);//12

// x *= 2;
// console.log(x);//24

// Q3

// let a = 5;

// console.log(a++);//5
// console.log(a);//6
// console.log(++a);//7
// console.log(a);//7

// Level 2 — Comparison operators

// Q4

// let a = 10;
// let b = 20;

// console.log(a > b);//false
// console.log(a < b);//true
// console.log(a >= 10);//true
// console.log(b <= 15);//false

// Q5

// let x = 10;

// console.log(x == 10);//true
// console.log(x === 10);//true
// console.log(x != 5);//true
// console.log(x !== 10);//false
// Level 3 — Logical operators

// Q6

// let age = 20;

// console.log(age > 18 && age < 25);//true
// console.log(age > 25 || age === 20);//true
// console.log(!(age > 18));//false

// Q7

// let a = true;
// let b = false;

// console.log(a && b);//false
// console.log(a || b);//true
// console.log(!a);//false
// console.log(!b);//true

// 🔥 Level 4 — Mixed operators

// Q8

// let x = 10;
// let y = 5;

// console.log(x + y * 2);//20
// console.log((x + y) * 2);//30
// console.log(x - y + 3);//8(precedence left to right if )

// Q9

// let a = 10;

// console.log(a++ + ++a);//22
// console.log(a);//12

// Q10

// let x = 5;
// let y = 10;

// console.log(x > 3 && y < 20);//true
// console.log(x > 10 || y === 10);//true
// console.log(!(x === 5));//false

// Q11

// let x = 8;

// x += 2;//10
// x *= 3;//30
// x -= 4;//26

// console.log(x);//26

// Q12

// let a = 5;

// console.log(a++ + a++);//11
// console.log(a);//7

// Q13

// let x = 10;

// console.log(x > 5 && x < 15);//true
// console.log(x > 15 || x === 10);//true
// console.log(!(x < 10));//true

//////////////////////////////////////////////////////////////////////////////
// Q1
// let a = 10;
// let b = "5";

// console.log(a + b);//"105"
// console.log(a - b);//5
// Q2
// let x = "10";

// console.log(x + 5);//"105"
// console.log(x * 2);//20
// console.log(x === 10);//false
// console.log(x == 10);//true
// Q3
// console.log(10 + 5 + "2");//"152"
// console.log("10" + 5 + 2);//"1052"
// console.log("10" - 5 + 2);//7
// Q4
// let a = 5;

// console.log(a++ + "2");//"52"
// console.log(a);//6
// Q5
// let x = "20";

// console.log(x - "5");//15
// console.log(x + "5");//"205"
// console.log(x / "2");//10
// Q6
// let a = 10;
// let b = "10";

// console.log(a == b);//true
// console.log(a === b);//false
// console.log(a != b);//false
// console.log(a !== b);//true
// Q7
// let x = 5;

// console.log(x + 2 + "3"); //"73"
// console.log(x + "2" + 3);//"523"
// console.log(x * "2" + 3);//13
// Q8 🔥
// let a = "5";
// let b = 2;

// console.log(a + b * 3);//56
// console.log((a + b) * 3);//156
// Q9 🔥
// let x = 10;

// console.log(x + "5" - 2);//103
// Q10 🔥
// let a = 5;

// console.log(a++ + ++a + "2");//"122"
// console.log(a);//7
// Q11 🧠
// console.log("10" - 5 + "2");//"52"
// console.log("10" + 5 - 2);//103
// Q12 🧠
// let x = "5";

// console.log(x == 5 && x === 5);//false
// console.log(x == 5 || x === 5);//true

//////////////////////////////////////////////////////////////////////
// Q1
// console.log(Boolean(0));//false
// console.log(Boolean(1));//true
// console.log(Boolean(""));//false
// console.log(Boolean("hello"));//true
// Q2
// let x = 0;

// if (x) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }
// "NO will be printed"
// Q3
// let x = "0";

// if (x) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }
// "Yes will be printed because the string in not empty."
// Q4
// console.log(Boolean(null));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(" "));//true(this is not khali it contain space)
// Q5
// let a = 10;
// let b = 0;

// console.log(a && b);//0(return first falsy value)
// console.log(a || b);//10(return first truthy value)
// Q6
// let a = 0;
// let b = "Hello";

// console.log(a || b);//"Hello"
// console.log(a && b);//0
// Q7 🔥
// console.log(!0);//true
// console.log(!1);//false
// console.log(!!0);//false
// console.log(!!"hello");//true
// Q8 🔥
// let x = "";

// console.log(x || "Default");//"Default"
// Q9 🔥
// let x = "Hello";
// let y = "";

// console.log(x && y);//""
// console.log(x || y);//"Hello"
// Q10 🧠
// console.log("5" == 5);//true
// console.log("5" === 5);//false
// console.log(true == 1);//true
// console.log(true === 1);//false
// Q11 🧠
// let x = 0;

// console.log(x == false);//true
// console.log(x === false);//false
// console.log(Boolean(x));//false
// Q12 😈
// let x = "0";

// console.log(x == false);//true
// console.log(x === false);//false
// console.log(Boolean(x));//true
// Q13 😈
// console.log(null == undefined);//true
// console.log(null === undefined);//false
// console.log(null == 0);//false
// console.log(undefined == 0);//false
// Q14 — Mixed 🔥
// let age = 20;
// let name = "";

// console.log(age && name);//""
// console.log(age || name);//20
// console.log(!name);//true
// Q15 — Boss level 😈
// let x = 5;

// console.log(x && "Hello");//"Hello"
// console.log(0 && "Hello");//0
// console.log("" || "JavaScript");//"JavaScript"
// console.log("JS" || "JavaScript");//"JS"

// Q16

// console.log(Boolean("false"));//true
// console.log(Boolean(false));//false

// Q17

// console.log(5 && 0 && "Hello");//0
// console.log(5 || 0 || "Hello");//5

// Q18

// console.log("" == false);//true
// console.log("" === false);//false
// console.log(Boolean(""));//false

// Q19

// let x = null;

// console.log(x || "Guest");//"Guest"
// console.log(x && "Guest");//null

// Q20 🔥

// let x = "10";

// console.log(x + 5 > 10);//true
// console.log(x + 5 === 15);//false
// console.log(x - 5 === 5);//true

////////////////////////////////////////////////////////////////////////

// Q1
// let x = 10;
// let y = x;

// x = 20;

// console.log(x);//20
// console.log(y);//10
// Q2
// const age = 22;

// console.log(age);//22
// Q3
// let name = "Affan";
// let age = 22;
// let isStudent = true;

// console.log(typeof name);//"String"
// console.log(typeof age);//number
// console.log(typeof isStudent);//boolean
// Q4
// let x;

// console.log(x);//undefined
// console.log(typeof x);//undefined
// Q5
// let a = null;

// console.log(a);//null
// console.log(typeof a);//object
// Q6
// let x = "10";
// let y = 20;

// console.log(typeof x);//string
// console.log(typeof y);//number

// console.log(x + y);//"1020" -> string
// Q7 🔥
// let a = 10;

// {
//     let a = 20;
//     console.log(a);//20
// }

// console.log(a);//10
// Q8
// const user = {
//     name: "Affan",
//     age: 22
// };

// console.log(typeof user);//object
// Q9
// let arr = [10, 20, 30];

// console.log(typeof arr);//object
// console.log(arr.length);//3
// Q10 🔥
// let x = true;

// console.log(typeof x);//boolean
// console.log(x + 5);//6
// Q11 🧠
// let x = "10";
// let y = "20";

// console.log(x + y);//"1020"
// console.log(Number(x) + Number(y));//30
// console.log(typeof Number(x));//number
// Q12 🧠
// let x = 10;

// x = "Hello";

// console.log(x);//Hello
// console.log(typeof x);//string
// Q13 🔥
// let x = 10;
// const y = 20;

// x = 30;

// console.log(x);//30
// console.log(y);//20
// Q14 😈
// let a = undefined;
// let b = null;
// let c = false;
// let d = 0;

// console.log(typeof a);//undefined
// console.log(typeof b);//object
// console.log(typeof c);//boolean
// console.log(typeof d);//number
// Q15 — Mixed 🔥
// let x = "5";
// let y = 2;
// let z = true;

// console.log(x + y);//"52"
// console.log(y + z);//3
// console.log(typeof (x + y));//string
// console.log(typeof (y + z));//number

//-------------------------------------------------------------------------------//
// Q1 🟢
// let age = 20;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
//o/p->Adult

// Q2
// let x = 10;

// if (x > 5 && x < 15) {
//     console.log("A");//A will be printed
// } else {
//     console.log("B");
// }
// Q3
// let x = 10;

// if (x > 15 || x === 10) {
//     console.log("YES");//Yes will be printed
// } else {
//     console.log("NO");
// }
// Q4
// let x = 0;

// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// o/p-> B

// Q5 🔥
// let x = "10";

// if (x === 10) {
//     console.log("A");
// } else if (x == 10) {
//     console.log("B");
// } else {
//     console.log("C");
// }
// //B

// Q6
// let marks = 75;

// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 60) {
//     console.log("B");
// } else if (marks >= 40) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }
// //o/p->B

// Q7 🔥
// let x = 5;
// if (x > 3) {
//     console.log("One");

//     if (x < 10) {
//         console.log("Two");
//     }
// } else {
//     console.log("Three");
// }
//o/p-> one and two

// Q8
// let username = "";

// if (username) {
//     console.log("Welcome");
// } else {
//     console.log("Please enter username");
// }
//"Please enter username"

// Q9 🔥
// let a = 10;
// let b = 20;

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }
//20

// Q10 🧠
// let x = 10;

// if (x > 5) {
//     if (x > 15) {
//         console.log("A");
//     } else {
//         console.log("B");
//     }
// } else {
//     console.log("C");
// }
//B

// Q11 😈
// let x = "0";

// if (x) {
//     console.log("A");
// }

// if (x == false) {
//     console.log("B");
// }

// if (x === false) {
//     console.log("C");
// }
//A and B (theeno if check honge)

// Q12 🔥
// let age = 20;
// let hasID = false;

// if (age >= 18 && hasID) {
//     console.log("Allowed");
// } else {
//     console.log("Not Allowed");
// }
//Not allowed

// Q13 🧠
// let x = 5;
// if (x++ > 5) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// console.log(x);
//B and 6

// Q14 🔥
// let x = 10;

// if (x > 5 && x < 20) {
//     console.log(x || 100);
// } else {
//     console.log(100);
// }
//10

// Q15 😈
// let x = 0;
// let y = "Hello";
// if (x || y) {
//     console.log("A");
// }
// if (x && y) {
//     console.log("B");
// } else {
//     console.log("C");
// }
//A and C

// Q16 — Boss Level 🧠
// let x = "5";
// if (x + 2 === "52") {
//     console.log("A");
// } else if (x - 2 === 3) {
//     console.log("B");
// } else {
//     console.log("C");
// }
// A

//---------------------------------------------------------------------
// Q1 🟢
// for (let i = 1; i <= 5; i++) {
//     console.log(i);// 1 2 3 4 5
// }

// Q2
// for (let i = 5; i >= 1; i--) {
//     console.log(i); // 5 4 3 2 1
// }

// Q3
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);//15

// Q4
// let x = 10;
// for (let i = 1; i <= 3; i++) {
//     x += i;
// }
// console.log(x);//16

// Q5 🔥
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) {
//         console.log(i);// 2 4
//     }
// }

// Q6
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);//1 2 4 5
// }

// Q7 🔥
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i); //1 2
// }

// Q8 🧠
// let x = 0;
// for (let i = 1; i <= 4; i++) {
//     if (i % 2 === 0) {
//         x += i;
//     }
// }
// console.log(x);//6

// Q9 🔥
// let x = 5;
// for (let i = 1; i <= 3; i++) {
//     console.log(x);//5 6 7
//     x++;
// }

// Q10 🧠
// for (let i = 1; i <= 3; i++) {
//   console.log("Start", i);
//   for (let j = 1; j <= 2; j++) {
//     console.log("Inner", j);
//   }
// }
//Start 1 Inner 1 Inner 2 Start 2 Inner 1 Inner 2 Start 3 Inner 1 Inner 2

// Q11 😈
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     if (i > 2) {
//         sum += i;
//     }
// }
// console.log(sum);//12

// Q12 🔥
// let x = 10;
// for (let i = 1; i <= 4; i++) {
//     x -= i;
//     if (x < 5) {
//         console.log("Stop");
//         break;
//     }
// }
// console.log(x);//4

// Q13 😈
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i * 2);//4 8
// }

// Q14 🧠
// let x = 1;
// for (let i = 1; i <= 3; i++) {
//     x *= i;
// }
// console.log(x);

// Q15 🔥
// let x = 0;
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     x += i;
// }
// console.log(x);12

// Q16 — Boss Level 😈
// let x = 0;
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         x += i + j;
//     }
// }
// console.log(x);21

// 0-------------------------------------------------------
// 🧠 Hoisting Practice — Round 1

// Q1 — var

// console.log(a);//undefined

// var a = 10;

// What is the output?

// Q2 — let

// console.log(a);// cannot access "a" before initialization

// let a = 10;

// What happens?

// Q3 — const

// console.log(a);// cannot access "a" before initialization

// const a = 20;

// What happens?

// Q4 — var + reassignment

// var x = 10;

// console.log(x);//10

// var x = 20;

// console.log(x);//20

// What is the output?

// Q5 — Function declaration

// hello();

// function hello() {
//     console.log("Hello");
// }

// What is the output? => "Hello"

// 🔥 Round 2 — Mix them

// Q6

// console.log(a);//undefined

// var a = 5;

// console.log(a);//5

// Q7

// hello();// exist hi nahi krta esa koi function

// var hello = function () {
//     console.log("Hello");
// };

// What happens?

// Q8

// var x = 10;

// function test() {
//     console.log(x);//undefined

//     var x = 20;

//     console.log(x);//20
// }

// test();

// What is the output?

// Q9

// var x = 10;

// function test() {
//     console.log(x);//10 -> it access variable from global scope
// }

// test();

// What is the output?

// Q10 — let inside function

// let x = 10;

// function test() {
//     console.log(x);//cannot access "x" before initialization

//     let x = 20;
// }

// test();

// What happens?

// 🧩 Round 3 — Slightly tricky

// Q11

// console.log(a);

// var a = 10;

// function test() {
//     console.log(a);//undefined

//     var a = 20;

//     console.log(a);//20
// }

// test();

// Q12

// hello();
// var hello = () => {
//     console.log("Hello");
// };
// function hello() {
//     console.log("Function Hello");
// }

// What happens? -> o/p --> "Function Hello"

// Q13

// var a = 10;
// function test() {
//     var a;
//     console.log(a);//undefined
//     a = 20;
//     console.log(a);//20
// }
// test();

// Q14

// console.log(a);//undefined
// function test() {
//     var a = 100;
// }
// var a = 50;
// test();
// console.log(a);//50

// Q15 — Challenge 😈

// var x = 1;
// function test() {
//     console.log(x);//undefined because var is present in scope so it is hoisted top of the code.
//     if (true) {
//         var x = 2;
//         console.log(x);//2
//     }
//     console.log(x);//2 because var is a functional scope
// }
// test();
// console.log(x);//1

//--------------------------------------------------------------------//
// Q1 — Basic outer → inner
// let x = 10;

// function test() {
//     console.log(x);//10
// }

// test();

// What is the output?

// Q2 — Inner variable
// function test() {
//     let x = 20;
//     console.log(x);//20
// }

// test();

// What is the output?

// Q3 — Outer cannot access inner
// function test() {
//     let x = 20;
// }

// test();

// console.log(x);//x is not defined

// What happens?

// Q4 — Nested scope
// let x = 10;
// function outer() {
//     let y = 20;
//     function inner() {
//         console.log(x);//10
//         console.log(y);//20
//     }
//     inner();
// }
// outer();

// What is the output?

// Q5 — Shadowing
// let x = 10;
// function test() {
//     let x = 20;
//     console.log(x);//20
// }
// test();
// console.log(x);//10

// What is the output?

// 🔥 Medium
// Q6 — Which x?
// let x = 10;
// function outer() {
//     let x = 20;
//     function inner() {
//         console.log(x);//20
//     }
//     inner();
// }
// outer();

// What is the output?

// Q7 — Three levels
// let x = 1;
// function outer() {
//     let y = 2;
//     function middle() {
//         let z = 3;
//         function inner() {
//             console.log(x);//1
//             console.log(y);//2
//             console.log(z);//3
//         }
//         inner();
//     }
//     middle();
// }
// outer();

// What is the output?

// Q8 — Shadowing at different levels
// let x = 1;
// function outer() {
//     let x = 2;
//     function inner() {
//         let x = 3;
//         console.log(x);//3
//     }
//     inner();
// }
// outer();
// What is the output?

// Q9 — No local x
// let x = 100;
// function outer() {
//     let y = 200;
//     function inner() {
//         console.log(x);//100
//         console.log(y);//200
//     }
//     inner();
// }
// outer();
// What is the output?

// Q10 — Inner x doesn't affect outer x
// let x = 10;
// function outer() {
//     let x = 20;
//     function inner() {
//         let x = 30;
//         console.log(x);//30
//     }
//     inner();
//     console.log(x);//20
// }
// outer();
// console.log(x);//10
// What is the output?

// 😈 Tricky — but still ONLY lexical scope
// Q11
// let a = 10;

// function outer() {
//     let b = 20;
//     function inner() {
//         console.log(a + b);//30
//     }
//     inner();
// }
// outer();

// Q12
// let x = 10;

// function outer() {
//     console.log(x);// x is uninitialized

//     let x = 20;
// }

// outer();

// What happens?

// ⚠️ Think about lexical scope + TDZ, not closure.

// Q13
// let x = 1;
// function outer() {
//     let y = 2;
//     if (true) {
//         let z = 3;

//         console.log(x);//1
//         console.log(y);//2
//         console.log(z);//3
//     }
// }
// outer();

// What is the output?

// Q14
// let x = 1;
// function outer() {
//   let y = 2;
//   if (true) {
//     let x = 3;
//     console.log(x);//3
//     console.log(y);//2
//   }
//   console.log(x);//1
// }
// outer();
// console.log(x);//1

// Q15 — Final challenge 🔥
// let a = 10;
// function outer() {
//     let a = 20;
//     if (true) {
//         let a = 30;
//         function inner() {
//             console.log(a);//30
//         }
//         inner();
//     }
//     console.log(a);//20
// }
// outer();
// console.log(a);//10

//----------------------------------------------------------------------
// Q1 — Basic closure
// function outer() {
//     let x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }
// let fn = outer();
// fn();//10
// What is the output?

// Q2 — Outer function finished
// function outer() {
//     let message = "Hello";
//     return function () {
//         console.log(message);
//     };
// }
// let fn = outer();
// fn();//"Hello"
// What is the output?

// Q3 — Remembering the variable
// function outer() {
//     let x = 5;
//     return function () {
//         console.log(x);
//     };
// }
// let fn = outer();
// console.log("Start");
// fn();//5
// console.log("End");
// What is the output?

// Q4 — Changing remembered variable
// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// let fn = counter();
// fn();//1
// fn();//2
// fn();//3

// What is the output?

// Q5 — Closure + parameter
// function createGreeting(name) {
//     return function () {
//         console.log("Hello " + name);
//     };
// }
// let greet = createGreeting("Affan");
// greet();//Affan
// What is the output?

// 🔥 Round 2 — Understand the memory
// Q6
// function counter() {
//     let count = 10;
//     return function () {
//         count += 5;
//         console.log(count);
//     };
// }
// let fn = counter();
// fn();//15
// fn();//20

// Q7
// function outer() {
//   let x = 10;
//   return function () {
//     x = x + 10;
//     console.log(x);
//   };
// }
// let fn = outer();
// fn();//20
// console.log("Again");
// fn(); //30

// Q8 — Two closures
// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let counter1 = counter();
// let counter2 = counter();
// counter1();//1
// counter1();//2
// counter2();//1
// counter1();//3

// What is the output?

// Q9 — Different values
// function createCounter(start) {
//     let count = start;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// let a = createCounter(5);
// let b = createCounter(10);
// a();//6
// b();//11
// a();//7
// b();//12

// Q10 — Same outer function, different execution
// function outer(value) {
//     return function () {
//         console.log(value);
//     };
// }
// let fn1 = outer(10);
// let fn2 = outer(20);
// fn1();//10
// fn2();//20
// fn1();//10

// 😈 Round 3 — Tricky
// Q11
// function outer() {
//     let x = 10;
//     function inner() {
//         x++;
//         console.log(x);
//     }
//     return inner;
// }
// let fn = outer();
// console.log("A");
// fn();//11
// console.log("B");
// fn();//12

// Q12
// function outer() {
//     let x = 10;
//     return function () {
//         let x = 20;
//         console.log(x);
//     };
// }
// let fn = outer();
// fn();//20

// Careful: which x is being accessed?

// Q13
// let x = 100;
// function outer() {
//     let x = 200;
//     return function () {
//         console.log(x);
//     };
// }
// let fn = outer();
// fn();//200

// Q14
// function outer() {
//     let x = 10;
//     return function () {
//         console.log(x);
//         x = 20;
//     };
// }
// let fn = outer();
// fn();//10 because x is already defined and function is returned as closure
// fn();//20

// Q15 — Final challenge 🔥
// function createCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         if (count === 2) {
//             console.log("Two");
//         } else {
//             console.log(count);
//         }
//     };
// }
// let counter = createCounter();
// counter();//1
// counter();//Two
// counter();//3

//--------------------------------------------------------------------//\

// Q1
// console.log(a);//undefined
// var a = 10;
// function test() {
//     console.log(a);//10
// }
// test();
// What is the output?

// Q2
// let x = 10;
// function outer() {
//     let x = 20;
//     return function () {
//         console.log(x);
//     };
// }
// let fn = outer();
// fn();//20
// What is the output?

// Q3
// console.log(a);// cannot acess "a"-> a is in tdz because let and const get hoisted at the time js reaches the line of code
// let a = 10;
// What happens?

// Q4
// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }
// let fn = outer();
// fn();//10
// What is the output?

// Q5
// var x = 10;
// function test() {
//     console.log(x);//undefined
//     var x = 20;
//     console.log(x);//20
// }
// test();
// console.log(x);//10

// 🔥 Round 2 — Mix Scope + Closure
// Q6
// let x = 1;
// function outer() {
//     let x = 2;
//     return function () {
//         console.log(x);
//         x++;
//     };
// }
// let fn = outer();
// fn();//2
// fn();//3
// console.log(x);//1

// Q7
// var message = "Global";
// function outer() {
//     var message = "Outer";
//     return function () {
//         console.log(message);
//     };
// }
// let fn = outer();
// fn();//"Outer"
// console.log(message);//"Global"

// Q8
// function createCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// let a = createCounter();
// let b = createCounter();
// a();//1
// b();//1
// a();//2
// b();//2

// Q9
// let x = 10;
// function outer() {
//   console.log(x); // cannot access "x" before inialization
//   return function () {
//     console.log(x);
//   };
//   let x = 20; //return ke baad koi code nahi chalta function ke andar
// }
// let fn = outer();
// fn(); //   cannot access "x" before inialization

// ⚠️ Be careful here.

// Q10
// var hello = "Global";
// function test() {
//     hello();//hello is not a function
//     var hello = function () {
//         console.log("Local");
//     };
// }
// test();
// What happens?

// 😈 Round 3 — Tricky
// Q11
// var x = 10;
// function outer() {
//     var x = 20;
//     function inner() {
//         console.log(x);
//     }
//     var x = 30;
//     return inner;
// }
// let fn = outer();
// fn();//30

// Q12
// let x = 10;
// function outer() {
//     let x = 20;
//     function inner() {
//         let x = 30;
//         console.log(x);
//     }
//     return inner;
// }
// let fn = outer();
// console.log(x);//10
// fn();//30

// Q13
// function counter() {
//     var count = 0;
//     return function () {
//         count += 2;
//         console.log(count);
//     };
// }
// var fn1 = counter();
// fn1();//2
// var fn2 = counter();
// fn1();//4
// fn2();//2

// Q14
// console.log(x);//undefined
// var x = 10;
// function outer() {
//     let x = 20;
//     return function () {
//         console.log(x);
//     };
// }
// let fn = outer();
// fn();//20
// console.log(x);//10

// Q15 — 🔥 Final Boss

// Take your time with this one.

// var x = 1;
// function outer() {
//     var x = 2;
//     function inner() {
//         console.log(x);
//         x++;
//     }
//     return inner;
// }
// var fn1 = outer();
// fn1();//2
// fn1();//3
// var fn2 = outer();
// fn2();//2
// fn1();//4
// console.log(x);//1
