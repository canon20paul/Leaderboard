
import { RefreshData } from './scoresAPI.js';
const scoresBoard = document.getElementById('scores');
export const displayScores = async () => {
  scoresBoard.innerHTML = '';
  const Board = await RefreshData();

  // Boards and counter timeDisplay()
  const counter = document.getElementById('counter');
  counter.innerHTML = `${Board.length}`;
  Board.sort((a, b) => b.score - a.score);
  Board.forEach((scores) => {
    scoresBoard.innerHTML += ` 
    <div class='record'><span class="names-span">${scores.user}&#8608;</span>
    <span class="scores-span">${scores.score}</span></div>`;
  });
};