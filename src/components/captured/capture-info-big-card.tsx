import { Capture } from '@/app/types'
import { cn } from '@/utils/cn'
import dayjs from 'dayjs'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { PopOver } from '../pop-over'
import bigImage from '@/assets/images/정우_1.png'
import ZoomImage from '../zoom-image'

interface Props extends HTMLAttributes<HTMLDivElement> {
  capture: Capture
  isTop?: boolean
}

export const CaptureInfoBigCard = ({
  className,
  capture: { imageUrl, time, gps, accuracy },
  isTop,
}: Props) => {
  return (
    <PopOver className={cn(className, 'text-white', 'w-[450px]')}>
      <ZoomImage className='' src={bigImage} width={450} height={450 * 288 / 549} targetX={-50} targetY={130} maxZoom={3} duration={1500}/>
      <div
        className={cn(
          'bg-[#202224cc]',
          'text-body-regular-14',
          'py-[18px]',
          'px-[21px]',
          'divide-y-[1.5px]',
          'divide-dashed',
          'divide-[#ffffff33]',
          'rounded-b-[10px]'
        )}
      >
        <div className="flex justify-between">
          <div>Accuracy</div>
          <div className="flex gap-[4px]">
            <div className="text-green">{accuracy}%</div>
            {isTop &&<div
              className={cn(
                'bg-red',
                'py-[2px]',
                'px-[3px]',
                'rounded-[2px]',
                'text-caption-bold-9',
              )}
            >
              Top
            </div>}
          </div>
        </div>
        <div className="flex justify-between">
          <div>Time</div>
          <div className="text-body-bold-14">{dayjs(time).format('HH:mm:ss')}</div>
        </div>
        <div className="flex justify-between">
          <div>GPS</div>
          <div>
            {gps.latitude}, {gps.longitude}
          </div>
        </div>
      </div>
    </PopOver>
  )
}
