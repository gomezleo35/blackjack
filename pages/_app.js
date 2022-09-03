import '../styles/globals.css'
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [resultado , setResultado] = useState();
  
  return <Component {...pageProps} 
    setResultado={setResultado}
    resultado={resultado}
  />
}

export default MyApp
