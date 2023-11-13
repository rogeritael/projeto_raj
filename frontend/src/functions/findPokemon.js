import { api } from "./api";
import { Context } from "../context/pokeContext";

export async function findPokemon(steps, context) {
    const { setModalName, setIsModalOpen, setModalImage } = context;

    if (steps % 20 === 0 && steps !== 0) {
        try {
            const pokemons = await api.get('/pokemons')
                .then(({ data }) => {
                    return data;
                });

            const randomIndex = Math.floor(Math.random() * pokemons.length);

            setModalName(pokemons[randomIndex].name);
            setModalImage(pokemons[randomIndex].image);
            setIsModalOpen(true);
        } catch (err) {
            console.log(err);
        }
    }
}
