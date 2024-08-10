import Image from 'next/image'
import { AccidentStatus } from './accident-status'
import { GoldenTime } from './golden-time'
import { MissingAccident } from '@/app/types'
import Link from 'next/link'
import { cn } from '@/utils/cn'

interface Props {
  id: number
  accident: MissingAccident
}

export const MissingRow = ({ id, accident }: Props) => {
  const { caseNumber, missingPerson, location, estimatedLocation, missingTime, caseStatus } =
    accident
  return (
    <Link
      href={`/${id}`}
      className={cn(
        'py-[26px] rounded-[12px] flex gap-[41px] overflow-hidden',
        caseStatus === 'done' ? 'opacity-70 bg-gray-1' : 'shadow-detail',
      )}
    >
      <div className="flex gap-[17px] *:h-[70px] pl-[20px] *:shrink-0">
        {/* IMAGE */}
        <div className="rounded-[8px] w-[70px] overflow-hidden relative">
          <Image src={missingPerson.imageUrl} fill alt="" />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-gray-2 text-body-semibold-14">{caseNumber}</div>
            <div className="text-body-bold-18 text-gray-5 mt-[-2px]">{missingPerson.name}</div>
          </div>
          <div className="flex text-body-regular-14 items-center">
            <span>{missingPerson.age}yrs</span>
            <div className="bg-gray-2 w-px mx-[8px] h-[60%]" />
            <span>{missingPerson.gender}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="pl-[27px] flex text-body-bold-14 text-gray-5 text-nowrap">
            <div className="w-[120px]">Status</div>
            <div className="flex-1">Lost location</div>
            <div className="flex-1">Appearance</div>
            <div className="flex-1 pr-[60px]">Estimated location</div>
            <div className="w-[234px]">Golden Time</div>
          </div>

          <div className="border-[0.8px] border-[#D5D5D5] mt-[4px]" />
        </div>

        <div className="pl-[27px] flex text-body-regular-14 text-nowrap items-center">
          <div className="w-[120px]">
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
    </Link>
  )
}
