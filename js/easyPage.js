// get the container for the cards
const container = document.querySelector(".wordWrapper");
// Modal knopkasini olish
// Modal oynani olish
var modal = document.getElementById("modal");

// Modal yopish tugmasini olish

// Modal knopkasini bosganda modalni ochish
modalBtn.onclick = function () {
  modal.style.display = "block";
}

// Foydalanuvchi modal oynaning tashqi qismini bosganda modalni yopish


// initialize variables
let selectedCards = [];
let numMatches = 0;
let error = 0;

// create arrays of cards
// Ease cards


const eng = [{
    id: 1,
    title: "hello",
    til: "eng"
  },
  {
    id: 2,
    title: "teacher",
    til: "eng"
  },
  {
    id: 3,
    title: "laptop",
    til: "eng"
  },
  {
    id: 4,
    title: "school",
    til: "eng"
  },
  {
    id: 5,
    title: "move",
    til: "eng"
  },
  {
    id: 6,
    title: "light",
    til: "eng"
  },
  {
    id: 7,
    title: "black",
    til: "eng"
  },
  {
    id: 8,
    title: "red",
    til: "eng"
  },
  {
    id: 9,
    title: "bag",
    til: "eng"
  },
  {
    id: 10,
    title: "phone",
    til: "eng"
  },
];

const uzb = [{
    id: 1,
    title: "salom",
    til: "uzb"
  },
  {
    id: 2,
    title: "ustoz",
    til: "uzb"
  },
  {
    id: 3,
    title: "noutbuk",
    til: "uzb"
  },
  {
    id: 4,
    title: "maktab",
    til: "uzb"
  },
  {
    id: 5,
    title: "kino",
    til: "uzb"
  },
  {
    id: 6,
    title: "oq",
    til: "uzb"
  },
  {
    id: 7,
    title: "qora",
    til: "uzb"
  },
  {
    id: 8,
    title: "qizil",
    til: "uzb"
  },
  {
    id: 9,
    title: "sumka",
    til: "uzb"
  },
  {
    id: 10,
    title: "telefon",
    til: "uzb"
  },
];

container.addEventListener("click", function (event) {
  // check if the clicked element is a card and not already matched
  const clickedCard = event.target.closest(".btn1");
  if (clickedCard && !clickedCard.classList.contains("matched")) {
    // add the clicked card to the selected cards array
    selectedCards.push(clickedCard);

    // flip the clicked card over to reveal the back side
    clickedCard.classList.toggle("flipped");

    // check if two cards have been selected
    if (selectedCards.length === 2) {
      // get the ids and languages of the selected cards
      const id1 = selectedCards[0].dataset.id;
      const id2 = selectedCards[1].dataset.id;
      const lang1 = selectedCards[0].dataset.language;
      const lang2 = selectedCards[1].dataset.language;
      // check if the ids match and the languages are different
      if (id1 === id2 && lang1 !== lang2) {
        // update the number of matches and display a message
        numMatches++;
        score.innerHTML = numMatches;
        localStorage.setItem('score', numMatches)

        // mark the selected cards as matched and remove them from the selected cards array
        selectedCards.forEach((card) => {
          card.classList.add("matched");
        });
        selectedCards = [];
      } else {
        // display a message and flip the selected cards back over to the front side
        error++;
        errorAll.innerHTML = error;
        localStorage.setItem('error', error)

        selectedCards.forEach((card) => {
          card.classList.remove("flipped");
        });
        selectedCards = [];
      }
    }
  }
});

// shuffle the cards using Fisher-Yates algorithm
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

// create the HTML for a card and return it as a string
function createCardHTML(card) {
  return `
        
        <button class="btn1 bubbly-button" data-id="${card.id}" data-language="${card.til}">${card.title}</button>
    `;
}

// initialize the game by shuffling the cards and adding them to the container
function initGame() {
  // combine the arrays of cards
  const allCards = eng.concat(uzb);

  // shuffle the cards
  shuffleCards(allCards);

  for (i in allCards) {
    const spanBtn = createCardHTML(allCards[i]);
    let x = $a(".btn1");
    x.forEach((span) => {
      let btln = span.getAttribute("data-language");
      if (btln == "uzb") {
        span.classList.add("uzbLan");
      } else {
        span.classList.add("engLan");
      }
      span.style.position += "absolute";
      //   let n =$a(".container")
      //   n.forEach((c)=>{
      //     console.log(c)
      //   })

      span.style.top = Math.random() * (700 - span.offsetHeight) + "px";
      span.style.left = Math.random() * (1400 - span.offsetWidth) + "px";
      // span elementiga tasodifiy rang berish
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      span.style.color = rgb;
      var rgb = `rgb (${r}, ${g}, ${b})`;
    });
    container.innerHTML += spanBtn;
  }
}

// start the game
initGame();
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
let a = true;
setInterval(() => {
  a ? second.innerHTML++ : second.innerHTML = "time ended"
}, 1000)
setTimeout(function () {
  modal.style.display = "block";
  result.innerHTML = localStorage.getItem('score') || 0
  xatolar.innerHTML = localStorage.getItem('error') || 0

  a = false
}, 12000);
modalBtn.addEventListener('click', () => {
  window.location = 'index.html';
  localStorage.setItem('error', "")
  localStorage.setItem('score', "")
})