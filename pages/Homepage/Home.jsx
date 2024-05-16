import React from 'react'
import './home.css'
import logo from '../../Assets/mile1-assets/logo.svg'

function Home() {

  return (
    <>
      <div id="main">
        <img src={logo} />
        <div id="homeText">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </div>

        <a id="aciktimBtn" href='/order-pizza'>ACIKTIM</a>






      </div>

    </>
  )
}

export default Home