"use client"
import Image from "next/image";
import style from "./im.module.css";
import { useEffect,useState } from "react";

function Im (){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad");
    const url="https://pokeapi.co/api/v2/pokemon/65";    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.moves[0].move.name)
        });
},[]);
return(
    <div className={style.contenedor}>
        <h1>{estado}</h1>
        <Image src={pokemon} height={250} width={250}/>
        <h1>{habilidad}</h1>
    
        </div>
    )
}

export default Im;