export function getGoldenTime(
  date: Date,
  options: {
    fullDeploy: boolean
  } = {
    fullDeploy: false,
  },
) {
  const now = new Date()
  const diff = date.getTime() - now.getTime()

  if (diff < 0) return '00:00:00'

  const msHour = 3600 * 1000
  const msMin = 60 * 1000
  const msSecond = 1000

  const hours = Math.floor(diff / msHour)
  const minutes = Math.floor((diff % msHour) / msMin)
  const seconds = Math.floor((diff % msMin) / msSecond)

  if (options.fullDeploy) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  } else {
    if (hours > 0) {
      return `${hours}시간`
    } else if (minutes > 0) {
      return `${minutes}분`
    } else {
      return `${seconds}초`
    }
  }
}
