import {useState} from 'react'

import image3 from './assets/image_3.png'
import image4 from './assets/image_4.png'
import image5 from './assets/image_5.png'
import image6 from './assets/image_6.png'

import SearchInput from './SearchInput'




export default function Description(){
  return (
    <article className="landing">
      <div className="main">
        <h2>Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple">Metaverse</span></h2>
        <p>we provide you access to luxury and affordable houses in the metavers, get a chance to turn your imagination to reality at your comfort zone</p>
        <SearchInput/>
      </div>
      <div className="imageGrid">
          <img src={image4} alt="htf home" className='image4'/>
          <img src={image3} alt="ntf home" className='image3'/>
          <img src={image5} alt="ntf home" className='image5'/>
          <img src={image6} alt="ntf home"
          className='image6' />
      </div>
    </article>
  )
}