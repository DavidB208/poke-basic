import { Outlet, Link } from "react-router-dom"

//Components
import { Card } from './components/Card'
import json from './assets/poke-json.json'

//Styles
import './sass/layout.scss'

//Hooks
import { useState, useEffect } from 'react'

const Layout = () => {

    const [poke, setPoke] = useState([])

    useEffect(()=>{
        getPokemones()
    },[])

    async function getPokemones() {

        const pokemons = await json

        let pokeArr = []
        pokeArr = pokemons

        //console.log(pokeArr)

        setPoke(pokeArr)
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <div className='cards'>
                            {
                                poke.map((pokemon) => {
                                    return <Link className="nameNone" to = {`/pokemon/${pokemon.id}`} key={pokemon.id}>
                                        <Card pokemon = {pokemon} key={pokemon.id} />
                                    </Link>                                
                                })
                            }
                        </div>
                        <div className='choose'>
                            <h1>Escoge tu favorito</h1>
                        </div>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export {Layout}