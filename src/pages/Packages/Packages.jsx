import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Packs from '../../components/Packs/Packs'
import './Packages.scss'

function Packages() {
  return (
    <div>
      <NavBar />
      <div className='packages-main-wrapper'>
        <Packs />
      </div>
      <Footer />
    </div>
  )
}

export default Packages