export function getDate(myDate){
    const date = new Date(myDate)
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDay()

    return `${year}-${month}-${day}`
}