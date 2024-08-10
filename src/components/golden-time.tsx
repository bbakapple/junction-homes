'use client'

import { cn } from '@/utils/cn'
import { HTMLAttributes, useEffect, useState } from 'react'
import Icon from './icon'
import { getGoldenTime } from '@/utils/date'

interface Props extends HTMLAttributes<HTMLDivElement> {
  date: Date
}

export const GoldenTime = ({ className, date }: Props) => {
  const [remainTime, setRemainTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setRemainTime(getGoldenTime(date, { fullDeploy: true }))
    }

    updateTime()

    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [date])

  return (
    <div className={cn(className)}>
      <div className="w-[134px] h-[36px] rounded-[40px] py-[6px] pl-[10px] bg-[#EAEAEA] flex gap-[10px]">
        <div className="size-[24px] rounded-full bg-red flex-center">
          <Icon name="clock" />
        </div>
        <div className="text-body-bold-14 text-gray-6">{remainTime}</div>
      </div>
    </div>
  )
}
