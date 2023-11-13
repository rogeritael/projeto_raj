import { Header } from '../../components/Header'
import { PokeCard } from '../../components/PokeCard'
import logo from '../../assets/logo.png'
import styles from './styles.scss'
import { useEffect, useState } from 'react'
import { verifyToken } from '../../functions/verifyToken'


export function Pokemons(){
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            await verifyToken()
        }
        fetchData()
        const storedData = localStorage.getItem('userValues')
        setData(JSON.parse(storedData))
        setIsLoading(false)
    }, [])

    return(
        !isLoading &&
        <section className='my_pokemons_section'>
            <Header />
            <div className="main_title_area">
                <img src={logo} alt="logo do pokémon" className='logo' />
                <h2>Pokémons Capturados</h2>
            </div>
            <div className="pokemons_container">
                {
                    data.map((item) => (
                        <PokeCard image={item.image} />
                    ))
                }
            </div>
        </section>
    )
}