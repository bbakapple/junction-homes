import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'
import Icon from './icon'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Filter = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <div className="py-[9.5px] px-[20px] rounded-[8px] border-gray-1 border-[1px] flex items-center w-fit text-body-medium-14 cursor-pointer">
        <Icon name="control" />

        <span className="ml-[8px]">14 Feb 2024</span>
        <Icon name="chevron-down" className="ml-[12px]" />

        <span className="ml-[16px]">Status</span>
        <Icon name="chevron-down" className="ml-[12px]" />

        <Icon name="refresh" className="ml-[16px]" />
      </div>
    </div>
  )
}
