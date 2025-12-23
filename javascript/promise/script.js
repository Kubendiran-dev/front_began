// // const tatkal = new Promise((resolve,reject)=>{
// //      bookingsuccess = true
// //     if (bookingsuccess)
// //         resolve(850)
// //     else
// //         reject()
// // })

// // tatkal.then((amt)=>console.log(`thanks bro! i have transferred rs.${amt}`))
// // .catch(()=>console.log("its okay bro"))

// // function success(){

// // }

// // function failure(){

// // }

// function tatkal() {
//     return new Promise((resolve, reject) => {
//         bookingsuccess = true
//         if (bookingsuccess)
//             resolve(850)
//         else
//             reject()
//     })
// }
// tatkal()
// .then((amt)=>console.log(`thanks bro! i have sent ${amt}`))
// .catch(()=>console.log(`its okay bro`))



let reachA = new Promise((resolve,reject)=> {
    const reached = true
    if(reached)
        setTimeout(resolve,3000,"abi reached")
    else
        reject("not reached")
})

let reachB = new Promise((resolve,reject)=> {
    const reached = true
    if(reached)
        setTimeout(resolve,2000,"sibi reached")
    else
        reject("not reached")
})

let reachC = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve,2000,"reached safely")
    else
    ("not reached yet")
})

Promise.all([reachA,reachB,reachC])
.then((msg)=>console.log(msg))
.catch((msg)=>console.log(msg))