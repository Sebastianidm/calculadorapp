import { useContext } from 'react';
import '../assets/styles/screen.css'
import CalculadoraContext from '../context/CalculadoraContext'


const Screen = () => {
  const { pantalla } = useContext(CalculadoraContext);


  
  return (
    <div className='containerScreen'>
      <div className='screen'>{pantalla}</div>
    </div>
  )
}

export default Screen