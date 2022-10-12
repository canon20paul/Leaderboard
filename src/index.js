import _ from 'lodash';
import './index.css';
import {displayScores} from './display.js';
import {NewScore} from './scoresAPI.js';

 window.onload
 displayScores();
const BtnAddScore = document.getElementById('btnAdd');
BtnAddScore.addEventListener('click', () => {
    const user = document.getElementById('names');
    const score = document.getElementById('scoresTXT');
    if (score.value === '' || user.value === '') {
    alert('Feel in both Your Name and Your Score as Required');
    user.value='';
    score.value='';
  }else{
    NewScore();
  }
});

// event handlers for the refresh button
const refreshBtn = document.getElementById('RefreshBtn');
refreshBtn.addEventListener('click', () => {
    window.location.reload();
});

// //ID FOR THE GAME
// {
//   "result": "Game with ID: ICAC56dlkUBF59kdhDKB added."
// }