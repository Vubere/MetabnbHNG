
import home from './assets/footerHome.png'
import metabnb from './assets/footerMeta.png'

import fb from './assets/fbIcon.png'
import insta from './assets/instaIcon.png'
import twitter from './assets/twitterIcon.png'



export default function AppFooter() {
  return (
    <footer className='appFooter'>
      <section className="guides">
        <section className="communtiy">
          <h4>Community</h4>
          <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </section>
        <section className="places">
          <h4>Places</h4>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </section>
        <section className="about">
          <h4>About us</h4>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </section>
      </section>
      <section className="main">
        <div className="icon">
          <img src={home} alt="home" />
          <img src={metabnb} alt="home" />
        </div>
        <div className="socials">
          <img src={fb} alt="facebook" />
          <img src={insta} alt="facebook" />
          <img src={twitter} alt="facebook" />
        </div>
        <div className="copyright">
          &#169; 2022 Metabnb
        </div>
      </section>
    </footer>
  )
}