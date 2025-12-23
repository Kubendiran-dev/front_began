// //error handling
// //exception handling
// try{
// let Num=prompt("enter the number")
// if(Num==='')
//     throw "can't be empty"
// if(isNaN(Num))
//     throw "enter the valid number"
// console.log(Num**2);
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("bye");
// }

//async -always returns a promise
// async function fn(){
// return "hello"
// }
// fn().then((msg)=>console.log(msg))

let reach = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve,2000,"abi reached")
    else
        reject("so far he didn't reach")
})

async function asyncstatus(){
    console.log("hi...");
    result = await  reach
    console.log(result);
    console.log("bye");
}
asyncstatus()