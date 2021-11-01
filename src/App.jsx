import React from 'react'
import "..styles/index.scss"
import Recepies from './components/Recepies'
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Ohh Hello React</h1>
        </section>
      </main>

      <Recepies />
    </>
  )
}

export default App
