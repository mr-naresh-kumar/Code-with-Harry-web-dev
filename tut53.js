console.log("this is tuttorial 53")
// let name = "naresh";
// console.log(name +" is a good boy")
function greet(name,greetText ="Gretting from javascript"){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");

}
function sum(a,b,c){
    let d =a + b + c;
    return d;
}
let name ="naresh";
let name1 ="rohan";
let name2 ="prince";
let name3 ="kalu";
let greetText ="Good Morning";
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
// greet(name3,);
// let returnVal = sum(1,2,3);
// console.log(returnVal)
let returnVal = greet(name3);
console.log(returnVal)