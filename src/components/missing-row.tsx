import { HTMLAttributes } from 'react'
import { AccidentStatus } from './accident-status'
import { GoldenTime } from './golden-time'

interface Props {}

export const MissingRow = ({}: Props) => {
  return (
    <div className="py-[26px] rounded-[12px] shadow-detail flex gap-[41px] overflow-hidden">
      <div className="flex gap-[17px] *:h-[70px] pl-[20px] *:shrink-0">
        {/* IMAGE */}
        <div className="rounded-[8px] w-[70px] bg-primary-3" />

        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-gray-2 text-body-semibold-14">SB-202403028965</div>
            <div className="text-body-bold-18 text-gray-5 mt-[-2px]">Jungwoo Ryoo</div>
          </div>
          <div className="flex text-body-regular-14 items-center">
            <span>26yrs</span>
            <div className="bg-gray-2 w-px mx-[8px] h-[60%]" />
            <span>Male</span>
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
            <AccidentStatus status="yet" />
          </div>
          <div className="flex-1 line-clamp-1">77, Cheongam-ro, Hyogok-dong</div>
          <div className="flex-1 line-clamp-1">Black T-shirts & Pants</div>
          <div className="flex-1 pr-[60px] line-clamp-1">11, Hyoja-ro 32beon-gil, Nam-gu</div>
          <div className="w-[234px]">
            <GoldenTime date={new Date('2024-08-13')} />
          </div>
        </div>
      </div>
    </div>
  )
}
