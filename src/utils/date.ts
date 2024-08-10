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

  const msHour = 3600 * 1000
  const msMin = 60 * 1000
  const msSecond = 1000

  const hours = Math.floor(diff / msHour)
  const minutes = Math.floor(((diff % msHour) / 60) * msSecond)
  const seconds = Math.floor((diff % msMin) / msSecond)

  if (options.fullDeploy) {
    return `${hours}시간 ${minutes}분 ${seconds}초`
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
