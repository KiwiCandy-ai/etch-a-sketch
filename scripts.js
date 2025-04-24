const resetbtn = document.createElement('button')
const changebtn = document.createElement('button')
changebtn.classList.add('button')
changebtn.textContent = "Change Size"
resetbtn.classList.add('button')
resetbtn.textContent = "Reset Grid"

const buttoncontainer = document.createElement('div')
const container = document.createElement('div')
document.body.appendChild(buttoncontainer)
document.body.appendChild(container)
container.classList.add('container')
buttoncontainer.classList.add('buttoncontainer')
buttoncontainer.appendChild(resetbtn)
buttoncontainer.appendChild(changebtn)



const changeColor = (event) => {
    event.target.style.backgroundColor = 'black'
}

let gridSize = 16
let grid = ''

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        grid = document.createElement('div')
        grid.classList.add('grid')

        grid.addEventListener('mouseover', changeColor)

        container.appendChild(grid)
    }
}

function resetGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid = document.createElement('div')
            grid.classList.add('grid')
    
            grid.addEventListener('mouseover', changeColor)
    
            container.appendChild(grid)
        }
    }
}


function changeGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    gridSize = prompt('Size?')
    if (gridSize > 100) {
        alert("Select a number lower than 100")
        changeGrid()
    } else {
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, 2fr)`);
    container.style.setProperty ("grid-template-rows", `repeat(${gridSize}, 2fr)`);
    for (let i = 0; i < gridSize *  gridSize; i++) {
        const grid = document.createElement('div')
        grid.classList.add('grid')

        grid.addEventListener('mouseover', changeColor)
        
        container.appendChild(grid)
    }
}
}

resetbtn.addEventListener('click', resetGrid)
changebtn.addEventListener('click', changeGrid)