import React from 'react'
import { useState , useEffect} from "react"
import { resultadoApostar } from "../helpers";
const Formulario = ({
    setResultado,
    resultado
}) => {

    const [carta, setCarta] = useState('');
    const [cartaCuprier, setCartaCuprier] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setResultado(resultadoApostar(carta, cartaCuprier))
        console.log(resultado)
    }
    
  return (
    <>
        <div className='flex justify-center mt-6'>
        <div className='flex flex-col items-cente  bg-orange-500 py-20 px-10 rounded-md border-4 border-red-800 md:w-1/3 sm:w-full'>
            <h1 className='text-center mb-9 text-4xl'>Estrategia BlackJack</h1>
            <form className="w-full max-w-lg"
                onSubmit={handleSubmit}
            >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Seleccione el valor de sus cartas
                </label>
                <div className="relative">
                  <select className="block 
                                    appearance-none
                                    w-full
                                    bg-gray-200 
                                    border
                                    border-gray-200
                                    text-gray-700
                                    py-3 
                                    px-4 
                                    pr-8 
                                    rounded 
                                    leading-tight 
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500" 
                    id="grid-state"
                    onChange={
                            (e) => setCarta(Number(e.target.value))
                          }
                  
                  >
                    <option>---</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option value={"18"}>A/2</option>
                    <option value={"19"}>A/3</option>
                    <option value={"20"}>A/4</option>
                    <option value={"21"}>A/5</option>
                    <option value={"22"}>A/6</option>
                    <option value={"23"}>A/7</option>
                    <option value={"24"}>A/8</option>
                    <option value={"25"}>2/2</option>
                    <option value={"26"}>3/3</option>
                    <option value={"27"}>4/4</option>
                    <option value={"28"}>5/5</option>
                    <option value={"34"}>6/6</option>
                    <option value={"29"}>7/7</option>
                    <option value={"30"}>8/8</option>
                    <option value={"31"}>9/9</option>
                    <option value={"32"}>10/10</option>
                    <option value={"33"}>A/A</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 mt-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Seleccione las cartas del cuprier
                </label>
                <div className="relative">
                  <select className="block 
                                    appearance-none
                                    w-full
                                    bg-gray-200 
                                    border
                                    border-gray-200
                                    text-gray-700 
                                    py-3 
                                    px-4 
                                    pr-8 
                                    ounded
                                    leading-tight 
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500" 
                    id="grid-state"
                    onChange={
                            (e) => setCartaCuprier(Number(e.target.value))
                          }
                  >
                    <option value="13">---</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option value={"11"}>A</option>
                  </select>
                </div>
              </div>
              
            </div>
            <input
                    className="mt-6 w-full p-3 text-white uppercase font-bold
                   cursor-pointer transition-all rounded-md bg-blue-400
                hover:bg-blue-800" 
                    value='Consultar'
                    type="submit"
                />
            {resultado ? <h1
                className='text-4xl
                    text-center
                    mt-8
                    font-bold
                    
                '
            >{resultado}</h1> : <></>}
          </form>
        </div>   
    </div>
    
    
    </>
  )
}

export default Formulario