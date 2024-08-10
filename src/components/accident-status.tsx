import { CaseStatus } from '@/app/types'
import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  status: CaseStatus
}

export const AccidentStatus = ({ status, className }: Props) => {
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          'flex items-center gap-[6px] px-[8px] py-[4px] w-fit rounded-[20px]',
          status === 'doing' && 'bg-[#FFDDDD]',
          status === 'yet' && 'bg-gray-1',
          status === 'done' && 'bg-[#D5DEFF]',
        )}
      >
        <div
          className={cn(
            'size-[8px] rounded-full',
            status === 'doing' && 'bg-[#FF0A0A]',
            status === 'yet' && 'bg-gray-3',
            status === 'done' && 'bg-[#1814F3]',
          )}
        />
        <div className="text-body-small-medium-12 text-gray-3">
          {status[0].toLocaleUpperCase()}
          {status.slice(1)}
        </div>
      </div>
    </div>
  )
}
