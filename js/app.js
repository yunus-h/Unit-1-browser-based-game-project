/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const handleBoxClick = (event) => {
    if (winner === true) {
      return;
    }
    const squareIndex = event.target.id;
  
  
    if (board[squareIndex] !== '') {
      return;
    }
  
    board[squareIndex] = turn
  
    updateBoard();
    checkForWinner();
    updateMessage();
    switchPlayerTurn();
   
  }


const updateBoard = () => {
    console.log("Update board called");
  
    //['', '', '', '', '', '', '', '', ''];
  
    road1.forEach((element, index) => {
  
      boxes[index].textContent = element
    })
  
  }
  
  const updateMessage = () => {
    console.log("Update message called");
  
    if (winner === false && tie === false) {
      if (turn === 'X') {
        messageEl.textContent = `Its X's turn`;
      } else {
        messageEl.textContent = `Its O's turn`;
      }
    } else if (winner === true) {
      messageEl.textContent = `${turn} wins!`;
    }
  }

const render = () => {
    console.log("Rendering board", board);
    updateBoard();
    updateMessage();
}

const init = () => {
    road1 = ['0','1','2','3','4','5','6','7','8','9'];
    turn = 'X';
    winner = false;
    die = false;

    
}


/*----------------------------- Event Listeners -----------------------------*/


// const elements = document.querySelectorAll('.road-box');

// elements.forEach((element, index) => {
//   setTimeout(() => {
//     // Apply your effect here, e.g., change class or style
//     element.classList.add('visible'); 
//   }, index * 500); // Delay in milliseconds, increasing for each element
// });

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
      // Your code to execute when the down arrow key is pressed
      console.log('Down arrow key pressed!');
    }
  });

const imageElement = document.querySelector('#roadbox0');
console.dir(imageElement);

imageElement.innerHTML = '<img src="./images/right.png" alt="">'; 
