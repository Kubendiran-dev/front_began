// let json1 = `[

// {"name":"kubea",
// "degree":"bsc"},

// {"name":"srinath",
// "degree":"CSE"},

// {"name":"s.mani",
// "degree":"BE"}

// ]`

// const parsed=JSON.parse(json1)
// console.log(parsed[1].degree);
// console.log(JSON.stringify(parsed));


//punchline API:
// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=>res.json())
// .then((msg)=>console.log((msg[0].setup,msg[0].punchline)))

//JSONPlaceholder — fake posts/comments/users:

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>res.json())
// .then((msg)=>console.log((msg[5].userId,msg[5].id,msg[5].title)))

//Dog CEO — random dog images.

fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(msg => console.log(msg))
  .catch(err => console.error(err));

   



