const users = require('../db/users')
const pokemons = require('../db/pokemons')

class UserRepository {
    findByUserName(username){
        return new Promise((resolve, reject) => {
            resolve(users.find((user) => user.user_name === username))
        })
    }

    getUserByToken(token){
        return new Promise((resolve, reject) => {
            const user = users.find((user) => user.token === token)

            resolve(user)
        })
        
    }

    // logout(username){
    //     return new Promise((resolve, reject) => {
    //         const user = users.find((user) => user.user_name === username)

    //         if(!user){
    //             return res.status(404).json({erro: 'Usuário não encontrado'})
    //         }

    //         const updatedUser = {
    //             id: user.id,
    //             user_name: user.user_name,
    //             password: user.password,
    //             pokemons: user.pokemons,
    //             token: 'jrg834tj-4tudf8ugt843u86'
    //         }

    //         users.map((user) => (
    //             user.user_name === username ? updatedUser : user
    //         ))

    //         resolve(updatedUser)
    //     })
    // }

    // catchPokemon(userId, pokemonId){
    //     pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId)

    //     isPokemonAlreadyCatched = ''
    // }
}

module.exports = new UserRepository()