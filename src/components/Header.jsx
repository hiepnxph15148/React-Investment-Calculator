import React from 'react'
import imageHeader from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header'>
      <img src={imageHeader} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header