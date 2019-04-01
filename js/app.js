const cards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ]

let myCardsInPlay = [];
let compCardsInPlay = [];
let cardsSelected = [];
let myScore = 0;
let compScore = 0;
let tieScore = 0;
  
      if (cards.length > 0) {
            getCards();
            for (let i = 0; i < 3; i++) {
                myCardsInPlay[i] = cardsSelected[i];
            };
            getCards();
            for (let i = 0; i < 3; i++) {
                compCardsInPlay[i] = cardsSelected[i];
            };
        } else {alert('No more cards left')};
  
  compareCards();
  console.log(`Me - ${myScore}, Computer - ${compScore},  Tie - ${tieScore}, cards left - ${cards.length}`)

  function getCards() {
      for(let i = 0; i < 3; i++) {
            let k = Math.floor(Math.random() * 18) + 1;
            cardsSelected[i] =  cards[k];
            cards.splice([k], 1);
      };
  };  

  function compareCards() {
      for(let i = 0; i < 3; i++) {
         if(myCardsInPlay[i].damage > compCardsInPlay[i].damage) {
             myScore++;
         } else if (myCardsInPlay[i].damage < compCardsInPlay[i].damage) {
             compScore++;
         } else {
             tieScore++;
         }    
      };
  };