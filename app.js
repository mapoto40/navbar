var click = document.querySelectorAll('#movediv')
var i = 0

document.querySelector('body').addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

//document.querySelector(`.${e.classList.value} #click`)

click.forEach((e) => {
    document.querySelector(`.${e.classList.value.split(' ')[0]} #click`).addEventListener('mousedown', () => {
        i = e.classList.value
        click.forEach((a) => a.style.zIndex = "0")
        document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.zIndex = `1`

        document.querySelector('body').addEventListener('mousemove', () => {
            if(i == e.classList.value){
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.position = `absolute`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.boxShadow = "4px 4px 4px rgba(0, 0, 0, 0.5)"
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.padding = `0`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.height = `auto`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.width = `400px`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.top = `0`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.left = `0`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.transform = `translateX(${mouseX - 200}px) translateY(${mouseY - 10}px)`
                document.querySelector(`.${e.classList.value.split(' ')[0]} #click #close`).style.display = 'block'
                document.querySelector(`.${e.classList.value.split(' ')[0]} #click`).classList.add('cliquee')
                document.querySelector(`.${e.classList.value.split(' ')[0]} iframe`).classList.add('open_iframe')
                
                document.querySelector('body').addEventListener('mouseup', () => {
                    i = 0
                })
            }
        })
    })
    document.querySelector(`.${e.classList.value.split(' ')[0]} #click #close`).addEventListener('click', () => {
        document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.position = `initial`
                document.querySelector(`.${e.classList.value.split(' ')[0]} #click`).classList.remove('cliquee')
                document.querySelector(`.${e.classList.value.split(' ')[0]} iframe`).classList.remove('open_iframe')
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.top = `auto`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.boxShadow = "none"
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.height = `50px`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.width = `auto`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.left = `auto`
                document.querySelector(`.${e.classList.value.split(' ')[0]}`).style.transform = `translateX(0) translateY(0)`
                document.querySelector(`.${e.classList.value.split(' ')[0]} #click #close`).style.display = 'none'
    })
})