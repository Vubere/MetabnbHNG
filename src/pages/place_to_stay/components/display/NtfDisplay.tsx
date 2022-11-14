
import NtfsDisplay from '../../../../components/NtfDisplay'

import dis1 from './assets/dis1.png'
import dis2 from './assets/dis2.png'
import dis3 from './assets/dis3.png'
import dis4 from './assets/dis4.png'
import dis5 from './assets/dis5.png'
import dis6 from './assets/dis6.png'
import dis7 from './assets/dis7.png'
import dis8 from './assets/dis8.png'
import dis9 from './assets/dis9.png'
import dis10 from './assets/dis10.png'
import dis11 from './assets/dis11.png'
import dis12 from './assets/dis12.png'
import dis13 from './assets/dis13.png'
import dis14 from './assets/dis14.png'
import dis15 from './assets/dis15.png'
import dis16 from './assets/dis16.png'


export default function NtfShowCase(){
  const ntfsArray = [
    { src: dis1, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis2, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis3, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis4, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis5, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis6, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis7, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis8, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis9, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis10, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis11, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis12, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis13, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis14, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis15, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
    { src: dis16, distance: '2345km', name: 'desert king', availabilty: '2weeks', rating: 5, cost: '1MBT' },
  ]
  return (
    <section className="flex">
      {ntfsArray.map((item)=> <NtfsDisplay item={item}/>)}
    </section>
  )
}