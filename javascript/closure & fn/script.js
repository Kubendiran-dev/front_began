let a = 10

function fn() {
    console.log('a is', a);
}

fn()
a = 100
fn()

//returning function - higher order function 

// function outer(name){
//     let outervariable = "bread"
//     function inner(){
//         let innervariable = "jam"
//         console.log("inner variable",innervariable);
//         console.log("outer variable",outervariable);
//         console.log("hi",name);
//     }return inner
// }
// let call = outer("kubea")
// call()


function hero() {
    return star
}
let star = "Aurakanth"
console.log(hero());


function count(num) {
    if (num > 5)
        return true
}
console.log(count(6));

function outer(name) {
    let outervariable = "scooty"
    function inner() {
        let innervariable = "engine"
        console.log("inner variable is", innervariable);
        console.log("outer variable is", outervariable);
        console.log("hi", name);
    } return inner
}
let call = outer("kubea")
call()


// function yamaha(){
//     let bike = 15
//     return bike
// }
// console.log(yamaha());


// function bankacc(num){
//     let balance = 1000
//     function depo(){
//         balance = balance + num 
//         return balance
//     } return depo
// }
// let total = bankacc(250)
// console.log(total())

function aadharcard() {
    let aadhar = "valid"
    function pancard() {
        let pan = "invalid"
        console.log("aadhar card is", aadhar);
        console.log("pand card is", pan)
    } return pancard
}
let check = aadharcard()
check()


function book() {
    let paper = "blank"
    return paper
}
let final = book()
console.log(final);


function makeadder(x) {
    return function (y) {
        return x + y
    }
}
let value = makeadder(10)
console.log(value(10));

function plus(a) {
    return function (b) {
        return a + b
    }
}
let result = plus(10)
console.log(result(15))

//only return statement:
function car() {
    let model = 2018
    return model
}
console.log(car()
);

function dog(age){
    if (age>=7){
        return "elder"
    }
    else{
        return "younger"
    }
}
console.log(dog(8));
