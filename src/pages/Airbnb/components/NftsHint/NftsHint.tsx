
import ntf from './assets/ntfh.png'



export default function NFTsHints() {
  return (
    <section className="ntfHint">
      <div className="main">
        <h2>Metabnb NFTs</h2>
        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusice services.</p>
        <a href="#">Learn more</a>
      </div>
      <div className="images">
        <img src={ntf} alt="ntf image" className='one'/>
      </div>
    </section>
  )
}