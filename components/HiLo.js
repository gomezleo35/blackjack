import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const HiLo = () => {
    const [contador, setContador] = useState(0);
    const [cant , setCant] = useState(0);
    const [verde, setVerde] = useState(false)
    const [rojo, setRojo] = useState(false)
    const [azul, setAzul] = useState(false)
    const [mensaje, setMesaje] = useState("")
    const suma = (e) => {
        e.preventDefault();
        let suma = 0;
        let sumaCartas = 0;
        suma = contador + 1;
        setContador(suma)
        sumaCartas = cant + 1;
        setCant(sumaCartas)
        console.log(contador)
    }
    
    const resta = (e) => {
        e.preventDefault();
        let resta = 0;
        let sumaCartas = 0;
        resta = contador - 1;
        setContador(resta)
        sumaCartas = cant + 1;
        setCant(sumaCartas)
        console.log(contador)
    }
    
    const cero = (e) => {
        e.preventDefault();
        let sumaCartas = 0;
        sumaCartas = cant + 1;
        setCant(sumaCartas)
        console.log(contador)
    }
    const reset = (e) => {
        setCant(0)
        setContador(0)
        console.log(contador)
    }
    
    useEffect(() => {
        if (contador > 20) {
            setVerde(true)
            setAzul(false)
            setRojo(false)
            setMesaje("se aproxima el black jack")
            
        } else if (contador < -20) {
            setRojo(true)
            setVerde(false)
            setAzul(false)
            setMesaje("Pocas probabilidades de hacer balck Jack")
        } else {
            setAzul(true)
            setRojo(false)
            setVerde(false)
            setMesaje("juego normal")
        }
    }, [contador])
    
    
  return (
    <div className='mt-4'>
        <h1 className='text-4xl text-center font-bold'>Hi Lo</h1>
        <h1
            className='mt-2 text-2xl'
        >Puntaje: </h1>
        <h1 className={`text-8xl text-center 
                ${verde && "text-green-500"}
                ${rojo && "text-red-500"}
                ${azul && "text-blue-500"}
                `}
        >{contador}</h1>
        <h1
            className={`text-2xl text-center uppercase shadow
                ${verde && "text-green-700"}
                ${rojo && "text-red-700"}
                ${azul && "text-blue-700"}
            `}
        >{mensaje}</h1>
        <div className='flex justify-between mt-4'>
                <button
                className='bg-red-600 
                    rounded-md 
                    px-10 
                    py-1 
                    border-2
                    border-black
                    hover:bg-red-800
                    text-white
                    '
                onClick={resta}
            >
                -1
            </button>
            <button
                className='bg-blue-600 
                    rounded-md 
                    px-10 
                    py-1 
                    border-2
                    border-black
                    hover:bg-blue-800
                    text-white
                    '
                onClick={cero}
            >
                0
            </button>
            <button
                className='bg-green-600 
                    rounded-md 
                    px-10 
                    py-1 
                    border-2
                    border-black
                    hover:bg-green-800
                    text-white
                    '
                    onClick={suma}
            >
                +1
            </button>   
        </div>
        <h1
            className='mt-2 text-2xl text-right'
        >Cantidad de cartas: <span>{cant}</span></h1>
        <div className='flex justify-center mt-6'>
            <button
                    className='bg-slate-400 
                        rounded-md 
                        px-10 
                        py-1 
                        border-2
                        border-black
                        hover:bg-slate-800
                        hover:text-white
                        uppercase
                        font-bold
                        '
                        onClick={reset}
                >
                reset
                </button>
        </div>
        
    </div>
  )
}

export default HiLo