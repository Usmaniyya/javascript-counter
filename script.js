let countNum = document.querySelector('.count')
let incrementBtn = document.querySelector('.increment')
let decrementBtn = document.querySelector('.deccrement')
let resetBtn = document.querySelector('.reset')

let count = 0

incrementBtn.addEventListener('click', () => {
    increment();
});

decrementBtn.addEventListener('click', () => {
    decrement();
});

resetBtn.addEventListener('click', () => {
    reset()
})

function increment() {
    count++
    countNum.innerHTML = `${count}`
}

function decrement() {
    count--
    if(count > 0){
        countNum.innerHTML = `${count}`
    }
    else if(count <= 0){
        count = 0
        countNum.innerHTML = `${count}`
    }
    else {
        countNum.innerHTML = `${count}`
    }
}

function reset() {
    count = 0
    countNum.innerHTML = `${count}`;
}