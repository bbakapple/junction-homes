'use client'

import { cn } from '@/utils/cn'
import { HTMLAttributes, useEffect, useMemo, useState } from 'react'
import Icon from './icon'
import { getGoldenTime } from '@/utils/date'
import dayjs from 'dayjs'

interface Props extends HTMLAttributes<HTMLDivElement> {
  date: Date
  isDone?: boolean
}

export const GoldenTime = ({ className, date, isDone }: Props) => {
  const [remainTime, setRemainTime] = useState('')
  const isFinish = useMemo(() => remainTime === '00:00:00', [remainTime])
  const level = useMemo(() => Number(Number(remainTime.split(':')[0]) / 10), [remainTime])

  const bgColor = useMemo(() => {
    if (isFinish) return 'bg-gray-3'
    if (level < 1) return 'bg-red'
    if (level < 2) return 'bg-blue'
    else return 'bg-gray-5'
  }, [isFinish, level])

  useEffect(() => {
    if (isDone) return setRemainTime('00:00:00')
    const updateTime = () => {
      setRemainTime(getGoldenTime(dayjs(date).add(2, 'day').toDate(), { fullDeploy: true }))
    }

    updateTime()

    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [date])

  return (
    <div className={cn(className)}>
      <div className="w-[134px] h-[36px] rounded-[40px] py-[6px] pl-[10px] bg-[#EAEAEA] flex gap-[10px]">
        <div className={cn('size-[24px]', 'rounded-full', bgColor, 'flex-center')}>
          <Icon name="clock" />
        </div>
        <div className="text-body-bold-14 text-gray-6">{remainTime}</div>
      </div>
    </div>
  )
}
