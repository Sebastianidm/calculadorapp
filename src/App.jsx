
import './App.css'
import Banner from './components/Banner'
import Body from './components/Body'
import Screen from './components/Screen'

import CalculadoraContext from './context/CalculadoraContext'
import { useState } from 'react'


function App() {
  const [pantalla, setpantalla] = useState("")



  
  return (
    <div className="App">
      <CalculadoraContext.Provider
      value={{
        pantalla,
        setpantalla,
      }}
      >

      <Banner/>
      <Screen />
      <Body/>

      </CalculadoraContext.Provider>
    </div>
  )
}

export default App
