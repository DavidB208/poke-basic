import { useParams } from "react-router-dom"

import json from '../assets/poke-json.json'

//Style
import '../sass/info.scss'

//Hooks
import { useState, useEffect } from 'react'

const Info = () => {

    const params = useParams();
    
    const [id, setId] = useState(0)

    useEffect(()=>{
        actualizarId()
        console.log(`useEffect ${id}`)
    },[])

    const pokemons = json

    let pokeArr = []
    pokeArr = pokemons

    function actualizarId(){
        console.log(params.ide)
        if (params.ide === '132'){
            setId(0);
        }
        else if( params.ide === '25'){
            setId(1);
        }
    }

    //console.log(id)
    //console.log(params.ide)

    return (
        <div className="pokeinfo">
            <div className="pokeinfo-container">
                <div className="pokeinfo-title">
                    <h1 className='pokemon-name'>{pokeArr[id].name}</h1>
                    <h1 className='pokemon-name'>Nº {pokeArr[id].id}</h1>
                </div>
                <div className="pokeinfo-imgs">
                    <img src={pokeArr[id].sprites.front_default} alt='' className='pokemon-img' />
                    <img src={pokeArr[id].sprites.back_default} alt='' className='pokemon-img' />
                </div>
                <div className="pokeinfo-abilities">
                    <h1>Abilities</h1>
                    <div className="pokeinfo-abilities-cu">
                        <h3 className="stat"> {pokeArr[id].abilities[0].ability.name} </h3>
                        <h3 className="stat"> {pokeArr[id].abilities[1].ability.name} </h3>
                    </div>
                </div>

                <div className="pokeinfo-abilities">
                    <h1>Moves</h1>
                    <div className="pokeinfo-abilities-cu">
                        <h3 className="stat"> {pokeArr[id].moves[0].move.name} </h3>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export {Info}