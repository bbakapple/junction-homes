import Icon from '../icon'

export const Input = () => {
  return (
    <div className="relative">
      <Icon
        name="magnifier"
        className="absolute bottom-1/2 left-[18px] translate-y-1/2 border-none"
      />
      <input
        className="w-[342px] h-[52px] py-[17.5px] pl-[52px] focus:outline-none rounded-[12px] border-[#ECEEF6] border-[1px] shadow-sm pr-[12px]"
        placeholder="Please enter a search term."
      />
    </div>
  )
}
