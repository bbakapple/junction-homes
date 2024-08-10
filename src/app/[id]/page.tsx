import CapturedPoint from '@/components/captured/captured-point'
import { MissingAccidents } from '@/data/missingAccidents'
import Image from 'next/image';
import MapInmage from '@/assets/map.png'

interface Props {
  params: {
    id: number
  }
}

export default function TeatPage({params: {id}}:Props) {
  const points = MissingAccidents[id].captured
  return (
  <div className='size-full relative'>
    <Image src={MapInmage} alt='지도' fill className='size-full object-cover'/>
    <CapturedPoint captures={points} />
  </div>
  )
}
