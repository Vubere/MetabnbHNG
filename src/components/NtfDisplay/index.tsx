import star from './assets/star.png'
import heart from './assets/heart.png'

export default function NtfsDisplay ({item}:any) {
  return (
    <section className='ntfContainer'>
      <div
        aria-label='ntf image'
        className="img"
        style={{
          background: `url(${item.src})`
        }}></div>

      <div className="footer"> 
        <div className="left">
          <p className="name">{item.name}</p>
          <p className="distance">{item.distance} away</p>
        </div>
        <div className="right">
          <p className="cost">{item.cost} per night</p>
          <p className="availability">
            available for {item.availabilty} stay
          </p>
        </div>

      </div>
      <div className="rating">
        <img src={star} alt='rating star' />
        <img src={star} alt='rating star' />
        <img src={star} alt='rating star' />
        <img src={star} alt='rating star' />
        <img src={star} alt='rating star' />
      </div>
    </section>
  )
}