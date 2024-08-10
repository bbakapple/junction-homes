import { Filter } from '@/components/filter'
import { Input } from '@/components/ui/input'
import { Card } from './card'

interface Props {}

export const SideList = ({}: Props) => {
  return (
    <div className="w-[400px] rounded-r-[12px] min-h-screen fixed top-0 left-[106px] overflow-hidden z-50 bg-white/90">
      <div className="pl-[35px] pt-[157px]">
        <div className="absolute top-[27px] left-[30px]">
          <Input />
        </div>

        <h2 className="text-title-bold-24 text-gray-5">List of missing person</h2>

        <Filter className="mt-[24px]" />
      </div>

      <div className="mt-[24px] max-h-[725px] flex flex-col gap-[14px] overflow-y-scroll mr-[10px]">
        <Card id={0} />
        <div className="pb-[260px]" />
      </div>
    </div>
  )
}
