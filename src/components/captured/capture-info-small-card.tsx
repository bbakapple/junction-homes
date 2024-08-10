import { Capture } from '@/app/types'
import { cn } from '@/utils/cn'
import dayjs from 'dayjs'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { PopOver } from '../pop-over'

interface Props extends HTMLAttributes<HTMLDivElement> {
  capture: Capture
  isTop?: boolean
}

export const CaptureInfoSmallCard = ({
  className,
  capture: { imageUrl, time, accuracy },
  isTop,
}: Props) => {
  return (
    <PopOver className={cn(className, 'w-[220px]', 'text-white')}>
      <div
        className={cn(
          'flex',
          'bg-[#202224cc]',
          'items-center',
          'py-[18px]',
          'px-[21px]',
          'gap-[15px]',
          'rounded-[15px]'
        )}
      >
        <div
          className={cn([
            'w-[60px]',
            'h-[60px]',
            'bg-white',
            'relative',
            'rounded-[6px]',
            'overflow-hidden',
          ])}
        >
          <Image src={imageUrl} alt="" fill />
        </div>
        <div
          className={cn(
            'text-body-regular-14',
            'divide-y-[1.5px]',
            'divide-dashed',
            'divide-[#ffffff33]',
            'rounded-b-[10px]',
            'grow'
          )}
        >
          <div className="flex justify-between">
            <div>Accuracy</div>
            <div className="flex gap-[4px]">
              <div className="text-green">{accuracy}%</div>
              {isTop && (
                <div
                  className={cn(
                    'bg-red',
                    'py-[2px]',
                    'px-[3px]',
                    'rounded-[2px]',
                    'text-caption-bold-9'
                  )}
                >
                  Top
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div>Time</div>
            <div className="text-body-bold-14">{dayjs(time).format('HH:mm:ss')}</div>
          </div>
        </div>
      </div>
    </PopOver>
  )
}
