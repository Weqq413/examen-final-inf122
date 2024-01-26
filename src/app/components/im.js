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
    const [ataque, setAtaque ] = useState("ataque");
    const [defenza, setDefenza ] = useState("defenza");
    const [sp, setSp  ] = useState("sp");
    

 
    const url="https://pokeapi.co/api/v2/pokemon/65";    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.moves[0].move.name),
            setAlto(data.game_indices[0].game_index),
            setAncho(data.types[0].type.weight),
            setHp(data.stats[0].base-stats),
            setId(data.game_indices[3].game_index),
            setAtaque(data.stats[0].base-stats),
            setDefenza(data.stats[0].base-stats),
            setSp(data.stats[0].base-stats)
        });
},[]);
return(
    <div className={style.contenedor}>
        <h1>My pokemon</h1>
        <h1>{estado}</h1>
        <p> {id}</p>
        <Image src={pokemon} height={300} width={300}/>
        <h3>about</h3>
        <h3>height:     {alto}</h3>
        <h3>weight:     {ancho}</h3>
        <h3>habilidad:  {habilidad}</h3>
        <h3>Stats</h3>
        <h3>hp:         {hp}</h3>
        <h3>ataque:     {ataque}</h3>
        <h3>defense:     {defenza}</h3>
        <h3>Speed:     {sp}</h3>

    
    </div>
    )
}

export default Im;