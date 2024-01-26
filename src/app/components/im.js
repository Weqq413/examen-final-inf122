"use client"
import Image from "next/image";
import style from "./im.module.css";
import { useEffect,useState } from "react";

function Im (){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad");
    const [hp, setHp ] = useState("hp");
    const [alto, setAlto] = useState("alto");
    const [ancho, setAncho] = useState("ancho");
    const [id, setId ] = useState("id");

 
    const url="https://pokeapi.co/api/v2/pokemon/65";    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.moves[0].move.name),
            setAlto(data.game_indices[0].game_index),
            setAncho(data.types.weight),
            setHp(data.moves[0].move.order),
            setId(data.held_items.id)
        });
},[]);
return(
    <div className={style.contenedor}>
        <h1>My pokemon</h1>
        <h1>{estado}</h1>
        <h1> {id}</h1>
        <Image src={pokemon} height={300} width={300}/>
        <h3>about</h3>
        <h3>height:  {alto}</h3>
        <h3>weight:  {ancho}</h3>
        <h3>habilidad:  {habilidad}</h3>

        <h3>hp: {hp}</h3>

    
    </div>
    )
}

export default Im;