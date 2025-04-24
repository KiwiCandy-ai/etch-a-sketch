const resetbtn = document.createElement('button')
const changebtn = document.createElement('button')
const heading = document.createElement('h1')
changebtn.classList.add('changebutton')
changebtn.textContent = "GO"
resetbtn.classList.add('rstbutton')
resetbtn.textContent = "Reset Grid"
const inputbox = document.createElement('input')
const sidepanel= document.createElement('div')
const buttoncontainer2 = document.createElement('div')
sidepanel.classList.add('side')
buttoncontainer2.classList.add('btn2')
const instructions = document.createElement('div')
instructions.textContent = 'Enter a number less than 100 to create a custom sized grid, for exmaple 64 for a 64x64 grid. Press reset button to reset current grid.'
instructions.classList.add('instructions')

const buttoncontainer = document.createElement('div')
const container = document.createElement('div')
document.body.appendChild(sidepanel)
sidepanel.appendChild(heading)
sidepanel.appendChild(buttoncontainer)
sidepanel.appendChild(instructions)
document.body.appendChild(container)
container.classList.add('container')
buttoncontainer.classList.add('buttoncontainer')
buttoncontainer.appendChild(resetbtn)
buttoncontainer.appendChild(buttoncontainer2)
buttoncontainer2.appendChild(inputbox)
buttoncontainer2.appendChild(changebtn)

inputbox.id = 'inputbox';
heading.textContent = "Etch-a-Sketch"

function getrandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    
    const changeColor = (event) => {
    
        event.target.style.backgroundColor = getrandomColor()
        event.target.classList.add('highlighted')
        event.target.classList.remove('grid')
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
    let userChoice = document.getElementById('inputbox');
    gridSize = inputbox.value;
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