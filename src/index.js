import './index.css';
import swal from 'sweetalert';
import { displayScores } from './display.js';
import { NewScore } from './scoresAPI.js';

window.onload = displayScores();
const BtnAddScore = document.getElementById('btnAdd');
BtnAddScore.addEventListener('click', () => {
  const user = document.getElementById('names');
  const score = document.getElementById('scoresTXT');
  if (score.value === '' || user.value === '') {
    swal('Empty Field/s?', 'Fill in both Your Name and Your Score as Required', 'error');
  } else {
    NewScore();
    user.value = '';
    score.value = '';
  }
});

// event handlers for the refresh button
const refreshBtn = document.getElementById('RefreshBtn');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

setInterval(() => {
  const date = new Date();
  const timeDate = document.getElementById('timeDate');
  const n = date.toDateString();
  const time = date.toLocaleTimeString();
  timeDate.innerText = `${n}     ${time}`;
}, 1000);

// const position = document.querySelectorAll('record');

// position.forEach(score, i) => {
//     setTimeout(() => {
//     score.addEventListener('click', ()=> {
//     counter = document.getElementById('counter');
//     counter.innerHTML = `${i}`;
//     }, 10000);
// })}
