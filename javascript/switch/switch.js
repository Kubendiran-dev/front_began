const btn = document.querySelector("button")
btn.addEventListener("click",displaystats)
function displaystats(){
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
   

    let population =0, literacy=0, language=0
switch(city){
    case "bengaluru":
        population = 875463
        literacy = 88
        language = "kannada"
        break
        case "chennai":
        population = 761654
        literacy = 98
        language = "tamil"
        break
        case "mumbai":
        population = 313454213
        literacy = 98
        language = "hindi"
        break
        case "hyderabad":
            population = 316461.1
            literacy = 72
            language = "telugu"
}
    let text = `the Indian city of ${city} has a population of ${population}.language spoken is ${language} and literacy is ${literacy}`
    console.log(text);
    let resultdiv=document.createElement("div")
    resultdiv.id=result
    document.getElementById("wrapped").appendChild(resultdiv)
    document.getElementById("result").innerHTML=text
}
    