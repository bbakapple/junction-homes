import { AccidentStatus } from '@/components/accident-status'
import { GoldenTime } from '@/components/golden-time'
import Icon from '@/components/icon'
import { MissingRow } from '@/components/missing-row'
import { missingAccidents } from '@/data/missing-accidents'
import dayjs from 'dayjs'

export default function Home() {
  return (
    <main className="pl-[35px] pr-[60px]">
      <h2 className="text-title-bold-24 text-gray-5 mt-[50px]">List of missing person</h2>

      <div className="py-[9.5px] px-[20px] rounded-[8px] border-gray-1 border-[1px] flex items-center w-fit text-body-medium-14 cursor-pointer mt-[24px]">
        <Icon name="control" />

        <span className="ml-[8px]">{dayjs().format('DD MMM YYYY')}</span>
        <Icon name="chevron-down" className="ml-[12px]" />

        <span className="ml-[16px]">Status</span>
        <Icon name="chevron-down" className="ml-[12px]" />

        <Icon name="refresh" className="ml-[16px]" />
      </div>

      <div className="flex flex-col gap-[24px] pr-[68px] mt-[35px] max-h-[700px] overflow-y-auto *:shrink-0">
        {
          missingAccidents.map((accident)=> (
            <MissingRow accident={accident}/>
          ))
        }
        <div className="pb-[300px]" />
      </div>
    </main>
  )
}
