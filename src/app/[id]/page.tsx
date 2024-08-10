import CapturedPoint from '@/components/captured/captured-point'
import { missingAccidents } from '@/data/missing-accidents'
import Image from 'next/image'
import MapInmage from '@/assets/map.png'
import { AccidentStatus } from '@/components/accident-status'
import { GoldenTime } from '@/components/golden-time'

interface Props {
  params: {
    id: number
  }
}

export default function TeatPage({ params: { id } }: Props) {
  const {
    caseNumber,
    missingPerson,
    location,
    estimatedLocation,
    missingTime,
    caseStatus,
    captured,
  } = missingAccidents[id]
  return (
    <div className="size-full relative">
      <Image src={MapInmage} alt="지도" fill className="size-full object-cover" />
      <CapturedPoint captures={captured} />

      <div className="absolute z-50 left-[442px] top-[32px] bg-white py-[20px] rounded-[12px] w-[calc(100%-484px)]">
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

        <div className="flex text-body-regular-14 text-nowrap items-center pt-[8px]">
          <div className="w-[120px] pl-[24px]">
            <AccidentStatus status={caseStatus} />
          </div>
          <div className="flex-1 line-clamp-1">{location}</div>
          <div className="flex-1 line-clamp-1">{missingPerson.signalment.join(', ')}</div>
          <div className="flex-1 pr-[60px] line-clamp-1">{estimatedLocation}</div>
          <div className="w-[234px]">
            <GoldenTime date={missingTime} isDone={caseStatus === 'done'} />
          </div>
        </div>
      </div>
    </div>
  )
}
