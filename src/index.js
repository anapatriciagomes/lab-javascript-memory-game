const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

const pairsClicked = document.getElementById('pairs-clicked');
const pairsGuessed = document.getElementById('pairs-guessed');
const pageTitle = document.querySelector('h1');

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `
    <div class="card" data-card-name="${pic.name}">
    <div class="back" name="${pic.img}"></div>
    <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
    </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      console.log(`Card clicked: ${card}`);
      memoryGame.pickedCards.push(card);
      console.log(memoryGame.pickedCards);
      card.setAttribute('class', 'card turned');

      if (memoryGame.pickedCards.length === 2) {
        const pairCheck = memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute('data-card-name'),
          memoryGame.pickedCards[1].getAttribute('data-card-name')
        );
        if (pairCheck === false) {
          setTimeout(() => {
            memoryGame.pickedCards.forEach(pickedCard => {
              pickedCard.setAttribute('class', 'card');
            });
            memoryGame.pickedCards = [];
          }, 1000);
        } else {
          memoryGame.pickedCards = [];
        }
        pairsClicked.innerText = memoryGame.pairsClicked;
        pairsGuessed.innerText = memoryGame.pairsGuessed;
        checkIfFinished();
      }
    });
  });

  const checkIfFinished = () => {
    if (memoryGame.checkIfFinished() === true) {
      // alert('CONGRATULATIONS, YOU WON!!!');
      pageTitle.innerText = 'CONGRATULATIONS, YOU WON!!!';
    }
  };
});
