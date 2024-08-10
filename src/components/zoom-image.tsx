'use client'

import { cn } from '@/utils/cn'
import Image from 'next/image'
import { HTMLAttributes, useLayoutEffect, useState } from 'react'

interface ZoomImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  width: number
  height: number
  targetX: number // %
  targetY: number // %
  maxZoom: number
  duration: number
}

const ZoomImage = ({
  src,
  width,
  height,
  targetX,
  targetY,
  maxZoom,
  duration,
  className,
}: ZoomImageProps) => {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    const startTime = Date.now()
    const initialX = 0
    const initialY = 0

    const animate = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      const easeProgress = easeOutCubic(progress)

      const newScale = 1 + (maxZoom - 1) * easeProgress
      const newX = initialX + (targetX - 50) * easeProgress
      const newY = initialY + (targetY - 50) * easeProgress

      setScale(newScale)
      setPosition({ x: newX, y: newY })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [targetX, targetY, maxZoom, duration])

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        width,
        height,
      }}
    >
      <Image
        src={src}
        fill
        alt="Zooming image"
        className="transition-transform duration-100 ease-linear"
        style={{
          transform: `scale(${scale}) translate(${-position.x}%, ${-position.y}%)`,
          transformOrigin: 'center',
        }}
      />
    </div>
  )
}

export default ZoomImage

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
