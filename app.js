const missed = 0;
const arrPhrases = [

  'The club is not the best place to find a lover',
  'So the bar is where I go',
  'Slip inside of your mind',
  'So I will start a revolution from my bed',
  'Do not look back in anger',
  'You and I are gonna live forever',
  'I am free to be whatever I',
  'Cause maybe you are gonna be the one that saves me',
  'Speaking words of wisdom let it be',
  'Take a sad song and make it better',

];

const overlay = document.getElementById('overlay');
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const resetBtn = document.querySelector('.btn__reset');

const getRandomAsArray = (arr)=>{
  
};


resetBtn.addEventListener("click",() => {
  overlay.style.display = 'none';
  getRandomAsArray(arrPhrases);
});
