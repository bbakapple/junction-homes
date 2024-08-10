import { Capture } from '@/app/types'

export const getLastCapturedIndex = (captured: Capture[]) => {
  const capturedTimes = captured.map((capture) => capture.time)
  const lastCapturedTime = capturedTimes.sort((a, b) => b.getTime() - a.getTime())[0]

  return captured.findIndex((capture) => capture.time === lastCapturedTime)
}
