//set and map-collection of new values
let arr = [1,2,3,4,5,1,2,3,4,5]
let myset = new Set(arr)
console.log(myset);

// let myset1 = new Set()
// myset1.add(22)
// myset1.add({name:"ram",age:22})
// myset1.add('str')
// console.log(myset1);

// let obj = {name:"ram",age:22}
// myset1.add(obj)//refernce type
// console.log(myset1 );
let myset1 = new Set()
myset1.add(325)
myset1.add("xyz")
myset1.add({name:"arunima",age:22})
let obj = {name:"arunima",age:22}//refernce type
myset1.add(obj)
console.log(myset1);
console.log(myset1.size);

let arr1 = Array.from(myset1)
console.log(arr1);

//map- map objects are collections of key-value pairs.key or value can be object
//key should be unique
let mymap = new Map()
mymap.set('a',1)
mymap.set('b',2)
console.log(mymap);
console.log(mymap.size);
console.log(mymap.has('b'));

for(let i of mymap)
    console.log(i);

for(let [k,v] of mymap)
    console.log(k);

for(let v of mymap.values()){
    console.log(v);}
    
mymap.forEach((v,k)=>{
    console.log('key',k,'value',v)
})

//2d array into map
let darr = [['a',1],['b',2]]
let map1= new Map(darr)
console.log(map1);

console.log([...map1]);//spread operator 


