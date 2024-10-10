
const planets = document.querySelectorAll('.draggable-planet');
const slots = document.querySelectorAll('.planet-slot');
const checkButton = document.getElementById('check-order');
const resultDiv = document.getElementById('result');

let currentOrder = [];

planets.forEach(planet => {
  planet.addEventListener('dragstart', dragStart);
});

slots.forEach(slot => {
  slot.addEventListener('dragover', dragOver);
  slot.addEventListener('drop', drop);
});

function dragStart(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const planetId = event.dataTransfer.getData('text');
  const droppedPlanet = document.getElementById(planetId);
  event.target.appendChild(droppedPlanet);
}

checkButton.addEventListener('click', () => {
  currentOrder = [];
  slots.forEach(slot => {
    if (slot.firstChild) {
      currentOrder.push(slot.firstChild.id);
    } else {
      currentOrder.push(null);
    }
  });
  
  checkOrder();
});

function checkOrder() {
  const correctOrder = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    resultDiv.innerText = "Correct! You've arranged the planets!";
  } else {
    resultDiv.innerText = "Incorrect order. Try again!";
  }
}
