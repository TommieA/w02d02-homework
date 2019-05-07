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

let myCardsInPlay   = [];
let compCardsInPlay = [];
let cardsSelected   = [];
let myScore         = 0;
let compScore       = 0;
let tieScore        = 0;
let round           = 0;
//let myCard          = {};
class myCard {
  constructor (name, damage) {
    this.name = name;
    this.damage = damage;
  };
};        

// while(cards.length > 0){
//   playPokemon();
// };

$('#message').text("Press Deal to start")

$('#deal').on('click', ()=>{
  $('#compCard1').text('');
  $('#compCard2').text('');
  $('#compCard3').text('');
  $('#message').text('');
  if(cards.length === 0){
    $('#message').text('Game Over.  Refresh to play again')
  }else{
    playPokemon()
  };
});
  
function playPokemon() {
    get3RandomCards();
    for (let i = 0; i < 3; i++) {
         x = i + 1;
         $('#myCard' + x).text(`${cardsSelected[i].name} ${cardsSelected[i].damage}`);
         myCardsInPlay[i] = cardsSelected[i];
    };

    get3RandomCards();
    for (let i = 0; i < 3; i++) {
        x = i + 1;
        compCardsInPlay[i] = cardsSelected[i];
    }; 
}; 

function get3RandomCards() {
    for(let i = 0; i < 3; i++) {
          if (cards.length === 1){let K = 0}else{
          k = Math.floor(Math.random() * cards.length)};
          cardsSelected[i] =  cards[k];
          cards.splice([k], 1);
    };
};  

function compareCards(){
    round++;
    let m = 0;
    do {
       m = Math.floor(Math.random() * 3);
    }
    while (compCardsInPlay[m] === '');
    let p = m + 1;
    //console.log(p, compCardsInPlay[m]);
    $('#compCard' + p).text(`${cardsSelected[m].name} ${cardsSelected[m].damage}`);   
    if(myCard.damage > compCardsInPlay[m].damage) {
        myScore++;
        $('#myScore').text(`${myScore}`);
        $('#message').text('You won');
        compCardsInPlay[m] = '';
    } else if (myCard.damage < compCardsInPlay[m].damage) {
        compScore++;
        $('#compScore').text(`${compScore}`);
        $('#message').text('The computer won');
        compCardsInPlay[m] = '';
    } else {
        tieScore++;
        $('#tieScore').text(`${tieScore}`);
        $('#message').text('Tie');
        compCardsInPlay[m] = '';
    };  
};

$('#myCard1').on('click', ()=>{
  //console.log(myCardsInPlay[0]);
  myCard.name = myCardsInPlay[0].name;
  myCard.damage = myCardsInPlay[0].damage;
  compareCards();
  $('#myCard1').text('');
});

$('#myCard2').on('click', ()=>{
  //console.log(myCardsInPlay[1])
  myCard.name = myCardsInPlay[1].name;
  myCard.damage = myCardsInPlay[1].damage;
  compareCards();
  $('#myCard2').text('');
});

$('#myCard3').on('click', ()=>{
  //console.log(myCardsInPlay[2])
  myCard.name = myCardsInPlay[2].name;
  myCard.damage = myCardsInPlay[2].damage;
  compareCards();
  $('#myCard3').text('');
});