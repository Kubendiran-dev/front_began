// //fn declaration
// function ispositive(num){//<-parameter
//     return num>0
// }
// console.log(ispositive(5));//argument 

// // //default parameters
// // function greet(name="there"){
// //     console.log("hi", name)
// // }
// // greet("kubea")
// // greet()


// //callback-fn passed as a argument

// // function greetconsole(name){
// //     console.log("hello",name);
// // }

// // function greet(callback){
// //     callback("kubea"); 
// // }

// // greet(greetconsole)


// // function welcome(place){
// //     console.log("vanakkam",place);
// // }

// // function wc(callback){
// //     callback("chennai")
// // }
// // wc(welcome)


// //foreach-is inbuild fn 
// arr = ["kubea","madhavi","nagaraj"]

// // arr.forEach(pnt)

// // function pnt(val){
// //     console.log(val.toUpperCase());
// // }

// // arr.forEach(val=>console.log(val.toUpperCase()))

// arr.forEach((val,index,arr)=>{arr[index]=val.toUpperCase()})
// console.log(arr);

arr=["BSC","ESC","IT","BE"]

arr.forEach(val=>{
    const opt=document.createElement("option")
    opt.textContent=val
    opt.value=val
    document.getElementById("branch").appendChild(opt)
})

