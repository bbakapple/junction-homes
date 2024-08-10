import Icon from '@/components/icon'
import { Input } from '@/components/ui/input'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <header className="h-[107px] pl-[29px] pr-[65px] flex items-center justify-between w-full border-gray-1 border-b-[2px] bg-white">
        <Input />

        <div className="flex items-center gap-[12px] absolute right-1/2 translate-x-1/2">
          <Icon name="police-logo" className="w-[84px] h-[55px]" />
          <div className="flex flex-col gap-[3.7px]">
            <div className="text-title-bold-24 text-[26px] text-blue">포항남부경찰서</div>
            <div className="text-body-small-bold-12">POHANG NAMBU POLICE STATION</div>
          </div>
        </div>

        <div className="flex gap-[23px] items-center">
          <Image src="/korea-again.png" width={96} height={43} alt="" />
          <Image src="/flag.png" width={69} height={43} alt="" />
        </div>
      </header>
    </div>
  )
}
