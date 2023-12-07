import '../sass/card.scss'

const Card = (pokemon) => {

    return (
        <div className='pokemon'>
            <div className="pokemon-card">
                <img src={pokemon.pokemon.sprites.front_default} alt='' className='pokemon-img' />
                <h1 className='pokemon-name'>{pokemon.pokemon.name}</h1>
            </div>
            
        </div>
    )
}

export { Card }