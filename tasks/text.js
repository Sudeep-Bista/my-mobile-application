// let numbers = [5,10,15,20,25];
// let doubled = numbers.map(
// function(n){
//     return n*2;
// });
// let filtered = numbers.filter(
// function(n){
//     return n>10;
// });

// console.log(doubled);
// console.log(filtered);



/*let marks = [40,80,55,90,30];
let grace = marks.map(m=> m+5);
let passed = marks.filter(m=> m>=55);

console.log(grace);
console.log(passed);*/

// let age = 17;
// if (age>= 18){
//     console.log("vote")
// }
// else{
//     console.log("not vote")

// }

// num = 23;
// if (num% 2== 0){
//     console.log(num, "is a even number")
// }else{
//     console.log(num, "is a odd number")
// }

// age =88

// if (age < 18){
//     console.log("junior")
// }else if (age > 60 ){
//     console.log("senior")
// }else{
//     console.log("middle")
// }

// let age = 22;
// let result = age >=18 ? "vote" : "not vote";
// console.log(result)

// let sum = 0;
// for (let i = 1; i <=100; i++){
//     sum += i;
// }
// console.log(sum);
// console.log("loop ended")

// for (let i = 0; i <=100; i++){
//     if (i%2 ==0){
//         console.log(i)

//     }
//     }


// let gameNum = 25;
// let guess = prompt("guess the number between 1 and 100");
// while (guess != gameNum){
//     guess = prompt("wrong guess, try again")
// }
// console.log("congratulations! you guessed the number")

// let str = "sudeep bista"
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.replace("sudeep", "Alexa"))
// console.log(str.charAt(3))
// str = str.replace("ee", "i")
// console.log(str)

// let full_name = prompt("enter your full name");
// let username= "@"+ full_name + full_name.length;
// console.log("your username is: ", username);

//property vs method

// let heros = [" parbas","sudeep", "hritik", "salman", "shahrukh"]
// ;
// for (let hero of heros){
//     console.log(hero.toUpperCase());
//}
// console.log(heros.length);
// console.log(heros.toString());
// console.log(heros.join(" - "));
// console.log(heros[2]);
// console.log(heros);

// let marks = [40,80,55,90,30];
// let sum = 0;
// for (let mark of marks){
//     sum += mark;
// }
// let average = sum/ marks.length;
// console.log("average marks: ", average);    

// let items = [220, 150, 300, 100, 250];
// let idx = 0;
// for (let item of items){
//     console.log(`value at index ${idx} = ${item}`);
//     let offer = item / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`offer at index ${idx} = ${items[idx]}`);

//     idx++;
// }

// function countVowels(str){
//     let count = 0;

//     for (let char of str){

//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//             count++;
//         }
//     }
//     return count;
// }

// function nice (name){
//     console.log("hey! " + name + " how are you?")

// }
// nice("sudeep")
// nice("parbas")
// nice("hritik")

// function sum(a,b){
//     console.log(a+b);
// }
// sum (22, 44)

// const function1 = (x) => {
//     console.log ("the sum of two number is :"  +x)

// }
// function1(22*44)

// function calculator(length , width, height){
//     return length * width * height;
// }
// console.log(calculator(10,2,3));

// 

let btn1 = document.querySelector("#btn1");

btn1.onclick = ()=> {
    console.log("button was clicked");
    let a = 25;
    a ++;
    console.log(a);
}
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div")
}