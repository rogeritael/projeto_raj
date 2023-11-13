import { api } from "./api"

export async function getAllPokemons(){
    // e.preventDefault()

    try {
        api.get('/pokemons')
        .then(({ data }) => {
            return data
            console.log(data)
        })
    } catch(e){
        alert(e)
    }
}