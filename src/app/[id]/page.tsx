import CapturedPoint from '@/components/captured/captured-point'
import { missingAccidents } from '@/data/missing-accidents'
import Image from 'next/image';
import MapInmage from '@/assets/map.png'
import { AccidentStatus } from '@/components/accident-status'
import { GoldenTime } from '@/components/golden-time'

interface Props {
  params: {
    id: number
  }
}

export default function TeatPage({params: {id}}:Props) {
  const points = missingAccidents[id].captured
  return (
    <div className="size-full relative">
      <Image src={MapInmage} alt="지도" fill className="size-full object-cover" />
      <CapturedPoint captures={points} />

      <div className="absolute z-50 left-[442px] top-[32px] bg-white py-[20px] rounded-[12px]">
        <div>
          <div className="flex text-body-bold-14 text-gray-5 text-nowrap">
            <div className="pl-[24px] w-[120px]">Status</div>
            <div className="flex-1">Lost location</div>
            <div className="flex-1">Appearance</div>
            <div className="flex-1 pr-[60px]">Estimated location</div>
            <div className="w-[234px] pr-[24px]">Golden Time</div>
          </div>

          <div className="border-[0.8px] border-[#D5D5D5] mt-[4px]" />
        </div>

        <div className="flex text-body-regular-14 text-nowrap items-center mt-[12px]">
          <div className="pl-[24px] w-[120px]">
            <AccidentStatus status="yet" />
          </div>
          <div className="flex-1 line-clamp-1">77, Cheongam-ro, Hyogok-dong</div>
          <div className="flex-1 line-clamp-1">Black T-shirts & Pants</div>
          <div className="flex-1 pr-[60px] line-clamp-1">11, Hyoja-ro 32beon-gil, Nam-gu</div>
          <div className="w-[234px] pr-[24px]">
            <GoldenTime date={new Date('2024-08-13')} />
          </div>
        </div>
      </div>
    </div>
  )
}
