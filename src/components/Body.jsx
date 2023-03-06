import React from "react";
import "../assets/styles/body.css";
import CalculadoraContext from "../context/CalculadoraContext";
import { useContext } from "react";


const Body = () => {
  const { setpantalla,  pantalla } = useContext(CalculadoraContext);

    const borrarPantalla = () => {
      if(pantalla.slice(-1) === " ") { 
        setpantalla(pantalla.substring(0, pantalla.length - 3))
      } else if ( pantalla.slice(-2) === "0.") {
        setpantalla(pantalla.substring(0,pantalla.length - 2))
      } else {
        setpantalla(pantalla.substring(0, pantalla.length - 1))
      }
    }

     
    const calc = () => {
      if (pantalla.length >= 5 && pantalla.slice(-1) !== " ") {
        setpantalla(eval(pantalla).toString());
      } 
    }

      // Esta funcion revisa si previamente el string tiene contenido, si lo tiene dispara la funcion, si no se queda igual ! condicional
    const addSimbols = ( simbol ) => {
      if ( pantalla.slice(-1) !== " " && pantalla.slice(-1) !== "." ){
        setpantalla( pantalla + simbol)
      }
    } 
   

    const resetAll = () => {
      setpantalla("")

    }

    

  return (
    <div className="container">

      <button   onClick={resetAll}  className="Reset botonReset"> RESET </button>
      <button  onClick={calc} className="Equal botonNumero btn botonEqual"> = </button>
      <button   onClick={()  => setpantalla(pantalla + "7" )} className="siete botonNumero btn"> 7 </button>
      <button   onClick={()  => setpantalla(pantalla + "8" )} className="ocho botonNumero btn"> 8 </button>
      <button   onClick={()  => setpantalla(pantalla + "9" )} className="nueve botonNumero btn"> 9</button>
      <button  
      onClick={() => pantalla.length >= 1 && borrarPantalla()} 
      className="Del botonDelete"> 
      DEL 
      </button>
      <button  onClick={()  => setpantalla(pantalla + "4" )} className="cuatro botonNumero btn"> 4 </button>
      <button  onClick={()  => setpantalla(pantalla + "5" )} className="cinco botonNumero btn"> 5 </button>
      <button  onClick={()  => setpantalla(pantalla + "6" )} className="seis botonNumero btn"> 6 </button>
      <button onClick={ () => pantalla.length >=1 && addSimbols (" + ")} className="mas botonNumero btn"> + </button>
      <button  onClick={()  => setpantalla(pantalla + "1" )} className="uno botonNumero btn"> 1 </button>
      <button  onClick={()  => setpantalla(pantalla + "2" )} className="dos botonNumero btn"> 2 </button>
      <button  onClick={()  => setpantalla(pantalla + "3" )} className="tres botonNumero btn"> 3 </button>
      <button  onClick={ () => pantalla.length >=1 && addSimbols (" - ")} className="menos botonNumero btn"> - </button>
      <button onClick={ () => pantalla.length >=1 && addSimbols (".")} className="punto botonNumero btn"> . </button>
      <button  onClick={()  => setpantalla(pantalla + "0" )} className="zero botonNumero btn"> 0 </button>
      <button  onClick={ () => pantalla.length >=1 && addSimbols (" / ")} className="slash botonNumero btn"> / </button>
      <button  onClick={ () => pantalla.length >=1 && addSimbols (" * ")} className="multiplicar botonNumero btn"> x </button>
    </div>
  );
};

export default Body;
