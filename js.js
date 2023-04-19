const h = document.querySelector('.h')
const m = document.querySelector('.m')
const s = document.querySelector('.s')


const getTime = () => {
    let getHour = new Date().getHours()
    let getMinute = new Date().getMinutes()
    let getSecond = new Date().getSeconds()

    getMinute = getMinute <  10 ? '0' + getMinute : getMinute
    getHour = getHour < 10 ? '0' + getHour : getHour
    getSecond = getSecond < 10 ? '0' + getSecond : getSecond


    h.innerText = getHour
    m.innerText = getMinute
    s.innerText = getSecond

    setTimeout(() => {
        getTime()
    },1000)
}



getTime()