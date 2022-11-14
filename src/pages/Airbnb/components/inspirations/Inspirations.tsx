
import NtfDisplay from '../../../../components/NtfDisplay'

import ins1 from './assets/ins1.png'
import ins2 from './assets/ins2.png'
import ins3 from './assets/ins3.png'
import ins4 from './assets/ins4.png'
import ins5 from './assets/ins5.png'
import ins6 from './assets/ins6.png'
import ins7 from './assets/ins7.png'
import ins8 from './assets/ins8.png'





export default function Inspirations() {
  const ntfsArray = [
    { src: ins1, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins2, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins3, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins4, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins5, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins6, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins7, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: ins8, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
  ]
  return (
    <section className="inspiration">
      <h2>Inspiration for your next adventure</h2>
      <div className="flex">
        {ntfsArray.map((item) => <NtfDisplay item={item}/>)}
      </div>
    </section>
  )
}