import { Watch } from "../Watch"
import { Link } from "react-router-dom";
import styles from './styles.scss'

export function Header(trackHour = true){
    return (
        <header id="topbar">
            <Watch /> 
            <nav>
                <ul>
                    <li><Link to={"/mapa"}>Mapa</Link></li>
                    <li><Link to={"/meus-pokemons"}>Meus Pokémons</Link></li>
                    <li><Link to={"/pokedex"}>Pokédex</Link></li>
                </ul>
            </nav>
        </header>
    )
}