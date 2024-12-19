function getRandomColor(){
    const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() *16)]
    }
    return color
}

function clearGrid(){
    const container = document.querySelector(".container")
    container.innerHTML = ""
    createGrid()
}

document.querySelector("#clear").addEventListener("click", clearGrid)





function createGrid(size = 16){
    const container = document.querySelector(".container")

    container.innerHTML = "";

    const squareSize = 400 / size

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`;
        
        

        square.addEventListener("mouseover", ()=> {
            const randomOpacityChange = Math.random() * 0.9 + 0.1;

            square.style.backgroundColor = getRandomColor();
            square.style.opacity = randomOpacityChange

        })

        container.appendChild(square)



    }
}

function adjustGrid(){
    let newSize = parseInt(prompt("How many squares per side? (MAX: 100)"))
    if (isNaN(newSize) || newSize < 1 || newSize > 100){
        alert("Please, choose a number between 1 and 100")
        return;
    }
    createGrid(newSize)
}

document.querySelector("#resize").addEventListener("click", adjustGrid)


function presetGrid(event){
    const size = parseInt(event.target.getAttribute("data-size"))
    createGrid(size)
}

document.querySelectorAll(".preset-size").forEach(button => {
    button.addEventListener("click", presetGrid)
})





createGrid()