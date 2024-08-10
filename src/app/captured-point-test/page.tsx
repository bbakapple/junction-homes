import CapturedPoint from '@/components/captured-point'

export default function TeatPage() {
  const points = [
    {
      imageUrl: '',
      coordinate: {
        x: 33,
        y: 80,
      },
    },
    {
      imageUrl: '',
      coordinate: {
        x: 60,
        y: 44,
      },
    },
  ]
  return <CapturedPoint capturedPoints={points} />
}
