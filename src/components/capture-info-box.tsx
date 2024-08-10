import { Capture } from '@/app/types'
import { cn } from '@/utils/cn'
import dayjs from 'dayjs'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  capture: Capture
  isTop: boolean
}

export const CaptureInfoBox = ({
  className,
  capture: { imageUrl, time, gps, accuracy },
  isTop,
}: Props) => {
  return (
    <div className={cn(className, 'text-white', 'w-[220px]', 'relative')}>
      <div className={cn('w-[220px]', 'h-[160px]', 'relative')}>
        <Image
          src={'https://cdn.pixabay.com/photo/2024/03/08/09/47/ai-generated-8620359_1280.png'}
          alt=""
          fill
          className={cn('rounded-t-[10px]', 'border-gray-6', 'border-[3px]', 'object-cover')}
        />
      </div>
      <div
        className={cn(
          'bg-[#202224cc]',
          'text-body-regular-14',
          'py-[18px]',
          'px-[21px]',
          'divide-y-[1.5px]',
          'divide-dashed',
          'divide-[#ffffff33]',
          'rounded-b-[10px]',
          'h-[100px]',
        )}
      >
        <div className="flex justify-between">
          <div>Accuracy</div>
          <div className="flex gap-[4px]">
            <div className="text-green">{accuracy}%</div>
            <div
              className={cn(
                'bg-red',
                'py-[2px]',
                'px-[3px]',
                'rounded-[2px]',
                'text-caption-bold-9',
              )}
            >
              Top
            </div>
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
      <div className="w-full flex justify-center">
        <Triangle />
      </div>
    </div>
  )
}

function Triangle() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_210_108)">
        <path d="M8 14L0.205774 0L15.7942 0L8 14Z" fill="#202224" fill-opacity="0.8" />
      </g>
      <defs>
        <filter
          id="filter0_b_210_108"
          x="-5.79419"
          y="-5.5"
          width="27.5884"
          height="25.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_210_108" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_210_108"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
