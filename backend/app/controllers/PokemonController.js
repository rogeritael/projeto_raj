const PokemonRepository = require('../repositories/PokemonRepository')

class PokemonController {
    async index(req, res){
        const pokemons = await PokemonRepository.findAll()

        res.json(pokemons)
    }
 
    async show(req, res){
        const { id } = req.params

        const pokemon = await PokemonRepository.findById(id)

        if(!pokemon){
            return res.status(404).json({ erro: 'pokemon não encontrado' })
        }

        res.json(pokemon)
    }

    store(req, res){

    }
}

module.exports = new PokemonController();