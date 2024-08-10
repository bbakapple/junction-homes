import { MissingAccident } from '@/app/types'
import { AccidentStatus } from '@/components/accident-status'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: number
  accident: MissingAccident
}

export const Card = ({ id, accident }: Props) => {
  return (
    <Link
      href={accident.caseStatus !== 'done' ? `/${id}` : '/'}
      replace={true}
      className={cn(
        'rounded-[12px] px-[20px] py-[28px] bg-white shadow-card ml-[35px] mr-[30px] relative',
        accident.charge && 'pb-[13px]',
        accident.caseStatus === 'done' ? 'opacity-70 bg-gray-1' : 'shadow-detail',
      )}
    >
      <div className="flex gap-[17px] *:h-[70px]">
        <div className="rounded-[8px] w-[70px] overflow-hidden relative">
          <Image src={accident.missingPerson.imageUrl} alt="" fill />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-gray-2 text-body-semibold-14">{accident.caseNumber}</div>
            <div className="text-body-bold-18 text-gray-5 mt-[-2px]">
              {accident.missingPerson.name}
            </div>
          </div>
          <div className="flex text-body-regular-14 items-center">
            <span>{accident.missingPerson.age}yrs</span>
            <div className="bg-gray-2 w-px mx-[8px] h-[60%]" />
            <span>{accident.missingPerson.gender}</span>
          </div>
        </div>
      </div>

      <AccidentStatus status={accident.caseStatus} className="top-[10px] right-[10px] absolute" />
      {accident.charge && (
        <div className="border-t-[2px] border-gray-1 pt-[10px] flex gap-[12px] items-center mt-[20px]">
          <div className="rounded-full size-[24px] relative overflow-hidden">
            <Image src={accident.charge.profileImage} fill alt="" />
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="text-body-small-bold-12">PIC</div>
            <div className="text-body-small-regular-12">{accident.charge.name}</div>
          </div>
        </div>
      )}
    </Link>
  )
}
