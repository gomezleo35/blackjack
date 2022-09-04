import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Formulario from '../components/Formulario'
import HiLo from '../components/HiLo'

export default function Home({
  setResultado,
  resultado
}) {
  return (
    <div className='flex justify-center m-10'>
      <div className='  bg-orange-500 py-10 px-10 rounded-md border-4 border-red-800 md:w-1/3 sm:w-full'>
      <Formulario
        setResultado={setResultado}
        resultado={resultado}
      />
      <HiLo/>
    </div>
    </div>
  )
}
