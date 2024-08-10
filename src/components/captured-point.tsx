'use client'

import { cn } from '@/utils/cn'
import { useState } from 'react'

interface CapturedPoint {
  imageUrl: string
  coordinate: {
    x: number
    y: number
  }
}

function Point({ capturedPoint }: { capturedPoint: CapturedPoint }) {
  const [isOpen, setIsOpen] = useState(false)

  const positionStyle = {
    top: `${capturedPoint.coordinate.x}%`,
    left: `${capturedPoint.coordinate.y}%`,
  }
  return (
    <div className={cn('absolute')} style={positionStyle}>
      <div
        className={cn('w-[24px]', 'h-[24px]', 'rounded-full', 'bg-black')}
        onClick={() => setIsOpen((prev) => !prev)}
      ></div>
      <div
        className={cn([
          isOpen && 'opcaticy-100',
          !isOpen && 'opacity-0',
          'absolute',
          'bottom-[36px]',
          '-translate-x-1/2',
          'left-1/2',
        ])}
      >
        <div>More Info</div>
      </div>
    </div>
  )
}

export default function CapturedPoint({ capturedPoints }: { capturedPoints: CapturedPoint[] }) {
  return (
    <div className="relative w-screen h-screen">
      {capturedPoints.map((capturedPoint, idx) => (
        <Point capturedPoint={capturedPoint} key={idx} />
      ))}
    </div>
  )
}
