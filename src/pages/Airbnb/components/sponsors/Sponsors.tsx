

import mbtoken from './assets/mbTokenIcon.png'
import metamask from './assets/metaMask.png'
import opensea from './assets/opensea.png'

export default function Sponsors(){
  return(
    <section className="sponsors">
      <div className="mbtoken">
        <img src={mbtoken} alt="mbtoken" />
        <p>MBToken</p>
      </div>
      <div className="metamask">
        <img src={metamask} alt="metamask" />
        <p>METAMASK</p>
      </div>
      <div className="opensea">
        <img src={opensea} alt="openSea" />
        <p>OpenSea</p>
      </div>
    </section>
  )
}