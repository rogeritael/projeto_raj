import { api } from "./api"

export async function catchPokemon(name){
    const result = JSON.parse(localStorage.getItem('userValues'))

    if(result.length > 4){
        alert('Você atingiu o numero máximo de pokemons')
        return
    }

    const data = await api.get('/pokemons')
    .then(({ data }) => {
        return data;
    })

    const findedValue = data.find((value) => value.name === name)
    result.push(findedValue)

    localStorage.setItem('userValues', JSON.stringify(result))
    alert(`Você capturou um ${findedValue.name}`)
}