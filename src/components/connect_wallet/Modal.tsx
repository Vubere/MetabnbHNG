import { createPortal } from 'react-dom'
import React from 'react'

import x from './assets/cancel.png'
import metamask from './assets/metamaskModalIcon.png'
import walletConnect from './assets/walletConnectIcon.png'
import arrow from './assets/arrow.png'


function Portal({ children }: { children: React.ReactNode }) {
  return createPortal(children, document.getElementById('modal') as HTMLDivElement)
}

export default function Modal({ closeModal }: any) {
  return (
    <Portal>
      <div className="modal" onClick={(e)=>{
          closeModal()
        }}>
        <div className="modalContainer"
        onClick={(e)=>e.stopPropagation()}
        >
          <header className='modalHeader'>
            <h2>Connect Wallet</h2>
            <img src={x} alt="close modal"
              onClick={closeModal}
              className='x' />
          </header>
          <main className='modalMain'>
            <p>Choose your preferred wallet</p>
            <ul>
              <li>
                <div className="main">
                  <div style={{ backgroundImage: `url(${metamask})` }} aria-label="metamask icon"
                    className='img' />
                  <p>
                    Metamask
                  </p>
                </div>
                <img src={arrow} alt="arrow icon" />
              </li>
              <li>
                <div className="main">
                  <div style={{ backgroundImage: `url(${walletConnect})` }} aria-label="wallet connect icon"
                    className='img' />
                  <p>
                    WalletConnect
                  </p>
                </div>
                <img src={arrow} alt="arrow icon" />
              </li>
            </ul>
          </main>
        </div>
      </div>
    </Portal>
  )
}