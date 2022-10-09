
import { Board } from '/index.js'; // Module is evaluated!

const scoresBoard = document.getElementById('scores');
const displayScores = () => {
  scoresBoard.innerHTML = ''
  // Boards.timeDisplay()
  Board.forEach((score, i) => {
    scoresBoard.innerHTML += ` 
          <div class='record'><span class="names-span">${Board[i].names}:</span>
           <span class="scores-span">${Board[i].scores}</span></div>
      `;
  });
}
export default displayScores;