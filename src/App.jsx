
import Countrys from './component/countrys/Countryse/Countrys'
import './App.css'
import { Suspense } from 'react'


  const countryPromiss = fetch('https://openapi.programming-hero.com/api/all')
  .then(res=>res.json())


function App() {

 

  return (
    <>
       <h1></h1>
      <Suspense fallback={<h3>this is a message</h3>}>
      <Countrys countryPromiss={countryPromiss}></Countrys>
        </Suspense>  

    </>
  )
}

export default App
