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

window.addEventListener('load', event => {
  let html = '';
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
      console.log(`Card clicked: ${card.getAttribute('data-card-name')}`);
      memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
      console.log(memoryGame.pickedCards);
      card.classList.toggle('turned');

      if (memoryGame.pickedCards.length === 2) {
        const pairCheck = memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        );
        if (pairCheck === false) {
          card.classList.toggle('turned');
          memoryGame.pairsClicked++;
          pairsClicked.innerText = memoryGame.pairsClicked;
        } else if (pairCheck === true) {
          card.classList.toggle('blocked');
          memoryGame.pairsClicked++;
          pairsClicked.innerText = memoryGame.pairsClicked;
          memoryGame.pairsGuessed++;
          pairsGuessed.innerText = memoryGame.pairsGuessed;
        }
        memoryGame.pickedCards = [];
        checkIfFinished();
      }
    });
  });

  const checkIfFinished = () => {
    if (memoryGame.checkIfFinished() === true) {
      alert('CONGRATULATIONS, YOU WON!!!');
    }
  };
});
