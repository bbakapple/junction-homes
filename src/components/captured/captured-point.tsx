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
      <div className={cn('w-[24px]', 'h-[24px]', 'rounded-full', 'bg-black')}></div>
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
