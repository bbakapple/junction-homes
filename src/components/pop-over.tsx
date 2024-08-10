import { cn } from '@/utils/cn'
import  { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
 
}

export const PopOver = ({ className, children }: Props) => {
  return <div className={cn(className, 'reative', )}>
    {children}
      <div className="w-full flex justify-center">
        <Triangle />
      </div>
    </div>
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
  