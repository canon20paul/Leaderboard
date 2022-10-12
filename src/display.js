import { RefreshData } from './scoresAPI.js';

const scoresBoard = document.getElementById('scores');
export const displayScores = async () => {
  scoresBoard.innerHTML = '';
  const Board = await RefreshData();

  // Boards.timeDisplay()
  Board.sort((a, b) => b.score - a.score);
  Board.forEach((scores) => {
    scoresBoard.innerHTML += ` 
    <div class='record'><span class="names-span">${scores.user}:</span>
    <span class="scores-span">${scores.score}</span></div>`;
  });
};