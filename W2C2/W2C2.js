//creating array to hold board data
let boardData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]

//defining game variables
let player  = 1;

// pulling cells from DOM
const cellElements =document.querySelectorAll(".cell")

//adding event listeners
cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () =>{
    placeMarker(index);
    });
});

//creating function for placing markers
function placeMarker(index){
    //determining row and column
    let col = index % 3
    let row = (index - col) / 3
    // checking if the cell is empty
    if(boardData[row][col] == 0){
    boardData[row][col] = player;
    //change player
    player *= -1;
}
}