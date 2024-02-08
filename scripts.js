let diss = document.getElementsByClassName('diss')
let first = document.getElementsByClassName('first')
let second = document.getElementsByClassName('second')

function move() {
    console.log(diss[0])

    diss[0].classList.add('active');
    diss[0].style = `
        top: ${(Math.random() * 50)}%;
        right: ${(Math.random() * 50)}%
    `;
}

function clickkk() {
    console.log(first)
    first[0].style = 'display: none;'
    second[0].style = 'display: block;'
}

