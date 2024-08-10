import { cn } from '@/utils/cn'

interface Props {
  variant: 'low' | 'high'
}

export const LowHighLabel = ({ variant }: Props) => {
  return (
    <div className={cn(variant === 'low' && 'bg-blue', variant === 'high' && 'bg-red')}>
      {variant}
    </div>
  )
}
