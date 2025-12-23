import React from "react"
import hero from './assets/Banner/hero.jpg.webp'
import heroine from './assets/Banner/1334087-171042-ivana1-1-1.webp'
import producer from './assets/Banner/Archana.webp'



const Cast = () => {

    const cast = [{
        id: 1,
        name: "Pradeep Ranganathan",
        role: "Hero & Director",
        image: hero 
    },
    {
        id: 2,
        name: "Ivana",
        role: "Heroine",
        image:  heroine
    },
    {
        id: 3,
        name:"Archana kalpathi",
        role: "Producer",
        image: producer 
    }
    ]

    //console.log(datas);

    return (
    <>
    <div className="container">
        <div className="crew">

 {cast.map((c) => (
        <div key={c.id}>
          <img src={c.image} width="150" />
          <h3>{c.name}</h3>
          <p>{c.role}</p>
        </div>
      ))}

        </div>



    </div>
     
    </>
  )
}

export default Cast