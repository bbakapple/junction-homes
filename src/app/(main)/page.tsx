import { AccidentStatus } from '@/components/accident-status'
import { Filter } from '@/components/filter'
import { GoldenTime } from '@/components/golden-time'
import Icon from '@/components/icon'
import { MissingRow } from '@/components/missing-row'

export default function Home() {
  return (
    <main className="pl-[35px] pr-[60px]">
      <h2 className="text-title-bold-24 text-gray-5 mt-[50px]">List of missing person</h2>

      <Filter className="mt-[24px]" />

      <div className="flex flex-col gap-[24px] pr-[68px] mt-[35px] max-h-[700px] overflow-y-auto *:shrink-0">
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <MissingRow />
        <div className="pb-[300px]" />
      </div>
    </main>
  )
}
