const pokemons = require('../db/pokemons')

class PokemonRepository {
    findAll(){
        return new Promise((resolve, reject) => {
            resolve(pokemons)
        })
    }

    findById(id){
        return new Promise((resolve, reject) => {
            resolve(pokemons.find((pokemon) => pokemon.id === id))
        })
    }
}

module.exports = new PokemonRepository()