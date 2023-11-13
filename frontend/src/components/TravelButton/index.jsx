import styles from './styles.scss'

export function TravelButton({label, url}){
    function handleSubmit(){
        const storedData = JSON.parse(localStorage.getItem('userValues'))

        if(storedData.length < 3){
            alert('Você precisa ter 3 pokémons para avançar')
            return
        }

        window.location.href = url
    }

    return(
        <button className="travel_button" onClick={() => handleSubmit()}>
            {label}
        </button>
    )
}