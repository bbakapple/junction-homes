import { cn } from '@/utils/cn'
import { CaptureInfoBigCard } from './capture-info-big-card'
import { Capture } from '@/app/types'
import { CaptureInfoSmallCard } from './capture-info-small-card'

interface PointProps {
  id: number
  capture: Capture
  isTop?: boolean
  isLast: boolean
}
function Point({ id, capture, isTop, isLast }: PointProps) {
  const positionStyle = {
    top: `${capture.coordinate.y}%`,
    left: `${capture.coordinate.x}%`,
  }
  return (
    <div className={cn('absolute')} style={positionStyle}>
      <div className="pt-[16px]">{pointSVG(isLast ? '#ff4848' : '#4870ff')}</div>
      <div className={cn('absolute', 'bottom-[36px]', '-translate-x-1/2', 'left-1/2')}>
        {isLast ? (
          <CaptureInfoBigCard isEven={id % 2 === 0} capture={capture} isTop={isTop} />
        ) : (
          <CaptureInfoSmallCard capture={capture} isTop={isTop} />
        )}
      </div>
    </div>
  )
}

export default function CapturedPoint({ captures }: { captures: Capture[] }) {
  return (
    <div className="relative w-screen h-screen">
      {captures.map((capture, idx) => (
        <Point
          capture={capture}
          key={idx}
          id={idx}
          isTop={idx === captures.length - 1}
          isLast={idx === captures.length - 1}
        />
      ))}
    </div>
  )
}

function pointSVG(color: string) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_156_71092)">
        <circle
          cx="26"
          cy="18"
          r="14"
          fill={color}
          fill-opacity="0.5"
          shape-rendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_156_71092)">
        <circle cx="25.5" cy="17.5" r="8.5" fill={color} />
      </g>
      <defs>
        <filter
          id="filter0_d_156_71092"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.7368 0 0 0 0 0.7368 0 0 0 0 0.7368 0 0 0 0.3 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_71092" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_156_71092"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_156_71092"
          x="5"
          y="5"
          width="41"
          height="41"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.7368 0 0 0 0 0.7368 0 0 0 0 0.7368 0 0 0 0.3 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_156_71092" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_156_71092"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
