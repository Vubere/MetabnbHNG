
import { Link } from 'react-router-dom'

/* icons */
import homeIcon from './assets/home.svg'
import metabnbIcon from './assets/metabnb.svg'

import * as routes from '../../routes/route'

export default function Header({ openModal }: any) {
  return (
    <header>
      <div className="icon">
        <Link to={routes.home}>
          <img src={homeIcon} alt="home icon" className='home' />
          <img src={metabnbIcon} alt="metabnb icon" className='metaBnB'
          />
        </Link>
      </div>
      <nav>
        <ul>
          <Link to={routes.home}>
            <li>Home</li>
          </Link>
          <Link to={routes.places}>
            <li>Place to stay</li>
          </Link>
          <li>NFTs</li>
          <li>Communtity</li>
        </ul>
      </nav>
      <button onClick={openModal}>
        Connect wallet
      </button>
    </header>
  )
}