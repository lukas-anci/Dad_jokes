'use strict';

const dummyJokeLine = 'init sentence?';
const dummyJokePunch = 'init punchline';

const el = {
  cat: document.querySelector('.cat'),
  sentence: document.querySelector('.sentence'),
  punchline: document.querySelector('.punchline'),
  punchBtn: document.getElementById('punch'),
  nextJoke: document.getElementById('nextJoke'),
};

el.punchBtn.addEventListener('click', punchLineHandler);
el.nextJoke.addEventListener('click', nextJokeHandler);

function punchLineHandler() {
  console.log('punch was pressed');
  showPunchLine();
}

function nextJokeHandler() {
  loadJoke();
  hidePunchLine();
}

function showPunchLine() {
  el.punchline.classList.add('open');
}
function hidePunchLine() {
  el.punchline.classList.remove('open');
}

function init() {
  loadJoke();
}

init();

function loadJoke() {
  fetch(
    'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/programming'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      fillJokesData(data[0]);
    })
    .catch((err) => console.warn(err));
}
function loadNextJoke() {
  fetch('./nextdummyJoke.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      fillJokesData(data);
    })
    .catch((err) => console.warn(err));
}

function fillJokesData(joke) {
  el.sentence.innerHTML = joke.setup;
  el.punchline.innerHTML = joke.punchline;
  el.cat.innerHTML = joke.type;
}
