import { AccidentStatus } from '@/components/accident-status'

interface Props {}

export const Card = ({}: Props) => {
  return (
    <div className="rounded-[12px] px-[20px] py-[28px] bg-white shadow-card ml-[35px] mr-[30px] relative">
      <div className="flex gap-[17px] *:h-[70px]">
        {/* IMAGE */}
        <div className="rounded-[8px] w-[70px] bg-primary-3" />

        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-gray-2 text-body-semibold-14">SB-202403028965</div>
            <div className="text-body-bold-18 text-gray-5 mt-[-2px]">Jungwoo Ryoo</div>
          </div>
          <div className="flex text-body-regular-14 items-center">
            <span>26yrs</span>
            <div className="bg-gray-2 w-px mx-[8px] h-[60%]" />
            <span>Male</span>
          </div>
        </div>
      </div>

      <AccidentStatus status="doing" className="top-[10px] right-[10px] absolute" />
      {true && <div></div>}
    </div>
  )
}
