//creating array to hold board data
let boardData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]

//defining game variables
let player  = 1;
let gameover = false;

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
    //drawing markers on the board
    drawMarkers();
    //checking if anyone has won
    checkResult();
    }
}

//creating function to draw markers
function drawMarkers() {
    //iterating over rows
    for(let row=0; row <3; row++){
        //iterating over columns
        for(let col=0; col <3; col++){
            //checking if player1 marker
            if(boardData[row][col] == 1){
             //updating cell class to add cross
             cellElements[(row*3)+col].classList.add("cross");   
            } else if( boardData[row][col] == -1){
            //updating cell class to add circle
             cellElements[(row*3)+col].classList.add("circle"); 
            }
        }
    }

}

//creating function for checking if a player has won
function checkResult(){
    //check rows and columns
    for(let i =0; i<3; i++){
       let rowsum=boardData[i][0] + boardData[i][1] + boardData[i][2]; 
       let colsum=boardData[0][i] + boardData[0][i] + boardData[0][i];
       if (rowsum ==3 || colsum ==3){
        //player 1 wins
        endgame(1);
        return
       } else if(rowsum == -3 || colsum == -3){
        //player 2 wins
        endgame(2);
        return
       }

    }
    //check diagonals
    let diagonalsum1 =boardData[0][0] + boardData[1][1] + boardData[2][2];
    let diagonalsum2 =boardData[0][2] + boardData[1][1] + boardData[2][0];
    if (diagonalsum1 ==3 || diagonalsum2 ==3){
        //player 1 wins
        endgame(1);
        return
       } else if(diagonalsum1 == -3 || diagonalsum2 == -3){
        //player 2 wins
        endgame(2);
        return
       }

    //check if it is a draw
    if(boardData[0].indexOf(0) == -1 &&
    boardData[1].indexOf(0) == -1 &&
    boardData[2].indexOf(0) == -1){
        endgame(0);
        return
        }
}

//function to end the game and display result
function endgame(Winner){
    //trigger game over
    gameover = true;
    const resultElement = document.getElementById("result") 
    //check if it is a draw
    if(winner ==0){
        resultElement.innerText = "It's a tie!"
    } else{
        resultElement.innerText = `Player ${Winner} wins!`
    }

}