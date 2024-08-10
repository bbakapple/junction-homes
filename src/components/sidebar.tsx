import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'
import { Logo } from './icon/svg-components'
import Icon from './icon'
import Link from 'next/link'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'h-screen relative z-50 bg-white drop-shadow-lg w-[106px] border-r border-[#E8E8E8]',
        className,
      )}
    >
      <Link href='/'>
        <Logo className="absolute right-1/2 translate-x-1/2 top-[48px]" />
      </Link>
      <div className="flex flex-col justify-between h-full pb-[83px] pt-[208px]">
        <div className="flex flex-col items-center gap-[12px] text-white">
          <div className="w-[58px] h-[63px] rounded-[12px] flex-center">
            <Icon name="side-icon1" />
          </div>
          <div className="w-[58px] h-[63px] rounded-[12px] flex-center bg-primary-3">
            <Icon name="side-icon2" />
          </div>
          <div className="w-[58px] h-[63px] rounded-[12px] flex-center">
            <Icon name="side-icon3" />
          </div>
          <div className="w-[58px] h-[63px] rounded-[12px] flex-center">
            <Icon name="side-icon4" />
          </div>
          <div className="w-[58px] h-[63px] rounded-[12px] flex-center">
            <Icon name="side-icon5" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full relative size-[50px] bg-[#0051B0]">
            <Icon name="police-logo" className="w-[42px] center" />
          </div>
          <div className="mt-[9px] text-body-bold-14">경북</div>
          <div className="mt-[3px] text-body-small-regular-12">포항남부경찰서</div>
        </div>
      </div>
    </div>
  )
}
