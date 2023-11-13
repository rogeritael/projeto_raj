import { useContext, useEffect } from "react"
import styles from './styles.scss'
import {Context} from '../../context/pokeContext'

export function Watch() {
    const { setDayTime, minutes, setMinutes, hours, setHours } = useContext(Context)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setMinutes((prevMinutes) => (prevMinutes + 1) % 60);
  
        if (minutes === 59) {
            if(hours === 23){
                setHours(0)
            } else {
                setHours((prevHours) => (prevHours + 1) % 60);
            }
        }
  
        if (hours >= 5 && hours < 20) {
            setDayTime('dia')
        } else {
            setDayTime('noite')
        }
      }, 1000);
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(interval);
    }, [minutes, hours]);
  
    return (
      <p id="watch">
        {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes}
      </p>
    );
  }