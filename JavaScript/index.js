//1. DOM manipulation
//firstContainer.innerHTML = "Hello there.";
//firstContainer.innerHTML = "<b>Hello you are bold now</b>";
//document.getElementsByName('h1');
//document.getElementsByName('h1')[0].style.fontSize = "35px";

//2. ways to print
// console.log("Hello world!");
//alert("hey there")
// document.write("this is document write");

//3. JavaScript console API
// console.warn("this is a warning");
// console.error("this is an error");
//console.clear();
// console.assert(8 == 9);
// console.assert(8 == 9 - 1);
// console.log("hello", 4 + 6, "another log");

//4. JavaScript variables
/*variables are containers to store data values

*/
var num1 = 34;
var num2 = 56;
// console.log(num1+num2);

//5. JS data types
//numbers
var n1 =455;
var n2 = 67.53;
// console.log(n1);

//string
var str1 = "this is a string";
var str2 = 'this is also a string';
// console.log(str1);

//object -> key value pairs
var marks = {
    diksha: 98,
    aman: 78,
    rahul: 55,
}
// console.log(marks);

//booleans
var a = true;
var b = false;
// console.log(a, b);

// console.clear();

//undefined
var un = undefined;
// console.log(un);
//console.log(undefined); //->also prints undefined
var und; //values is undefined now also

//null
var x = null;
//console.log(x); //null and undefined are diff from each other

/*DTs in JS are of mainly 2 types:
    1. Primitives : undefined, null, numbers, strings, boolean, symbol(advanced JS)
    2. Reference DTs : arrays, objects
*/
//symbol
//Symbol('')

//arrays -> collection of elements (elements can be of diff DTs)
var arr = [1, 2, "diksha", 4, 6];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

//operators in JS
//arithmetic ops
var a = 34;
var b = 56;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

//assignment ops
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison ops
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators
// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);


// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

//blue in console = number
//black in console = string


//conditionals in JS
// Single if statement
var age = 41;
// if(age > 18){
//     console.log("You can drink");
// }

//if-else statement
// if(age > 18){
//         console.log("You can drink");
//     }
//     else{
//         console.log("You CANNOT drink!");
//     }

//if-else ladder
// if(age > 32){
//     console.log("you are not a kid");
// }
// else if(age > 26){
//     console.log("okay");
// }
// else if(age > 18){
//     console.log("cool!");
// }
// else{
//     console.log("bye");
// }
//console.log("End of ladder");

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;  //cannot be reassigned/overriden. immutable
// ac++;
// ac = ac +1;
// let j = 0;  //block level scope
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();  //removes last element
// myArr.push("diksha")
// myArr.shift()   //removes first elem and shifts all elements to a previous pos
// const newLen = myArr.unshift("diksha")  //inserts elem at first pos and shifts all other elements to a later pos
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("diksha", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());  //0-6. sun-sat
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//document.location()
//DOM manipulation Methods

//document.getElementById('click').click()
// document.getElementById('click').style.border = 'blue';
// document.getElementById('click').style.border = '2px solid blue';

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText); 
//elemClass[0].classList.remove("text-success");

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 

tn = document.getElementsByTagName('div')
// console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); -> removes an element

/*document.location()
document.URL()
document.domain()
document.links()
document.scripts()
document.forms()
document.images()
document. */

//query selector
sel = document.querySelector('.container');  //returns only one element
// console.log(sel);
sel = document.querySelectorAll('.container');  //returns a nodelist
// console.log(sel);


//JS Events
// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
//}

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })


/*
multiple event listeners can be added
to the same HTML element
 */


// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     console.log("Mouse down when clicked on Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>";
//     console.log("mouse down when clicked on container");
// })


//arrow functions
function summation(a, b){
    return a+b;
}
//can be written as
summation = (a, b) => {
    return a+b;
}


//set Timeout and interval
//first argument is a function, and the second argument is a time period in ms

logging = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>set timeout fired!</b>"
    // console.log("i am your logger");
}
//setTimeout(logging, 3000);
clr = setTimeout(logging, 5000);
clr = setInterval(logging, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'diksha') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "diksha", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"diksha,"length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)



