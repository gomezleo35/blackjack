import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Formulario from '../components/Formulario'
export default function Home({
  setResultado,
  resultado
}) {
  return (
    <div>
      <Formulario
        setResultado={setResultado}
        resultado={resultado}
      />
    </div>
  )
}
