export interface FormattedDate {
  day: string
  date: number
  month: string
  year: number
  hours: number
  minute: string
  seconds: string
  time: string
}

export const formatDate = (dateStr: string): FormattedDate => {
  const dateObj = new Date(dateStr)

  const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: 'long' })
  const monthFormatter = new Intl.DateTimeFormat(undefined, { month: 'long' })

  const day = dayFormatter.format(dateObj)
  const date = dateObj.getDate()
  const month = monthFormatter.format(dateObj)
  const year = dateObj.getFullYear()

  let hours = dateObj.getHours()
  const minutes = dateObj.getMinutes().toString().padStart(2, '0')
  const seconds = dateObj.getSeconds().toString().padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12 // The hour '0' should be '12'
  const time = `${hours}:${minutes} ${ampm}`

  //   let res = new Intl.DateTimeFormat(undefined, options).format(dateObj)
  //   console.log(res)
  return {
    day,
    date,
    month,
    year,
    hours,
    minute: minutes,
    seconds,
    time,
  }
}
