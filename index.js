const boxesContrainer = document.getElementById('boxes')
const button = document.getElementById('btn')

button.addEventListener('click', ()=>{
    boxesContrainer.classList.toggle('big')
})

function createBox() {
    for (let index = 0; index < 4; index++) {
        for (let indexTWO = 0; indexTWO < 4; indexTWO++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-indexTWO * 100}px ${-index * 100}px`
            boxesContrainer.appendChild(box)
            console.log(box);
        }
    }
}

createBox()