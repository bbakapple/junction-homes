'use client'

import { cn } from '@/utils/cn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { HTMLAttributes, useRef } from 'react'

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
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: maxZoom,
        x: (-(targetX - 50) * width) / 100,
        y: ((targetY - 50) * height) / 100,
        duration: duration / 1000,
        ease: 'power3.inOut',
        delay: 1,
      })
    }
  }, [])

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        width,
        height,
      }}
    >
      <Image
        ref={imageRef}
        src={src}
        fill
        alt=""
        style={{
          transformOrigin: 'center',
        }}
      />
    </div>
  )
}

export default ZoomImage
