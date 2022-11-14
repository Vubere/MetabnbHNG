
import setting from './assets/setting.svg'

import star from './assets/star.png'

export default function Navigation() {
  return (
    <nav className='ptsNav'>
      <ul>
        <li>Restaurant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <div className="filter">
        <p>Location</p>
        <div className="filterImg"
          style={{
           backgroundImage: `url(${setting})`
          }}></div>
      </div>
    </nav>
  )
}