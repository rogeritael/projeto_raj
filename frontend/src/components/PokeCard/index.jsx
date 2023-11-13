import styles from './styles.scss'

export function PokeCard({image}){
    return(
        <figure className="poke_card">
            <img src={image} alt="imagem do pokémon" />
        </figure>
    )
}