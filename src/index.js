import './index.css';
import {displayScores} from './display.js';
import {NewScore} from './scoresAPI.js';
import swal from 'sweetalert';

window.onload;
displayScores();
const BtnAddScore = document.getElementById('btnAdd');
BtnAddScore.addEventListener('click', () => {
  const user = document.getElementById('names');
  const score = document.getElementById('scoresTXT');
  if (score.value === '' || user.value === '') {
    swal("Empty Field/s?", "Fill in both Your Name and Your Score as Required","error");
    user.value = '';
    score.value = '';
  } else {
    NewScore();
  }
});

// event handlers for the refresh button
const refreshBtn = document.getElementById('RefreshBtn');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});