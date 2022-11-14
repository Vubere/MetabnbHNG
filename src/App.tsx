
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './components/appFooter/AppFooter'

import AppHeader from './components/appHeader/AppHeader'
import Modal from './components/connect_wallet/Modal'

import './styles/app.scss'


function App() {
  const [modal, toggleModal] = useState(false)

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    toggleModal(true)
  }
  const closeModal = () => {
    document.body.style.overflow = 'auto'
    toggleModal(false)
  }
  return (
    <>
      <div className="App">
        <AppHeader openModal={openModal}/>
        <Outlet />
        <AppFooter />
      </div>
      {modal&&<Modal closeModal={closeModal}/>}
    </>
  )
}

export default App
