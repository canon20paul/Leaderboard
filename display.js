
import { Board } from '/index.js'; // Module is evaluated!

const scoresBoard = document.getElementById('scores');
const displayBoards = () => {
  scoresBoard.innerHTML = ''
  // Boards.timeDisplay()
  Board.forEach((score, i) => {
    scoresBoard.innerHTML += ` 
          <span class="names-span">"${Board.names}"</span>
           <span class="scores-span">${Board.scores}</span>
      `;
  });
}
export default displayScores;