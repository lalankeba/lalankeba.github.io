const uniqueCards = [
    {name: "pig", img: "pig.png"},
    {name: "chicken", img: "chicken.png"},
    {name: "deer", img: "deer.png"},
    {name: "manta", img: "manta.png"},
    {name: "owl", img: "owl.png"},
    {name: "panda", img: "panda.png"},
    {name: "snail", img: "snail.png"},
    {name: "spider", img: "spider.png"},
    {name: "fox", img: "fox.png"},
    {name: "elephant", img: "elephant.png"},
    {name: "zebra", img: "zebra.png"},
    {name: "kangaroo", img: "kangaroo.png"},
    {name: "monkey", img: "monkey.png"},
    {name: "horse", img: "horse.png"}
];

let numOfUniqueCards = 4;
const board = document.querySelector(".cards-container");
const refreshBtn = document.getElementById("refresh-btn");
const numberOfCards = document.getElementById("number-of-cards");
let selectedCardImages = [];
let numOfMatches = 0;

const shuffleCards = (array) => {
    return array.toSorted(() => 0.5 - Math.random());
}

const getDisplayCards = (array, numOfItems) => {
    let shuffledCards = shuffleCards(array);
    shuffledCards = shuffledCards.slice(0, numOfItems);
    shuffledCards = shuffledCards.concat(shuffledCards);
    return shuffleCards(shuffledCards);
}

function checkForMatch() {
    if (selectedCardImages[0].cardName == selectedCardImages[1].cardName) { // match found
        console.log("found match");
        selectedCardImages[0].setAttribute("src", "images/memory-game/white.png");
        selectedCardImages[1].setAttribute("src", "images/memory-game/white.png");

        selectedCardImages[0].cardMatched = true;
        selectedCardImages[1].cardMatched = true;

        selectedCardImages[0].style.cursor = 'auto';
        selectedCardImages[1].style.cursor = 'auto';

        numOfMatches += 1;
    } else { // not a match
        console.log("no match");
        selectedCardImages[0].setAttribute("src", "images/memory-game/init.png");
        selectedCardImages[1].setAttribute("src", "images/memory-game/init.png");

        selectedCardImages[0].cardClicked = false;
        selectedCardImages[1].cardClicked = false;

        selectedCardImages[0].style.cursor = 'pointer';
        selectedCardImages[1].style.cursor = 'pointer';
    }

    selectedCardImages = [];

    if (numOfMatches === numOfUniqueCards) {
        console.log("finished");
        board.innerHTML = "<h2>You won</h2>";
    }
}

function cardClick(evnt) {
    let item = evnt.currentTarget; // img

    if (!item.cardMatched && !item.cardClicked) {
        item.setAttribute("src", "images/memory-game/" + item.cardImage);
        item.cardClicked = true;
        item.style.cursor = 'auto';

        selectedCardImages.push(item);

        if (selectedCardImages.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
}

function createBoard() {
    let totalCards = numberOfCards.value;
    if (totalCards < 8 || totalCards > 24 || totalCards % 4 !== 0) {
        numberOfCards.value = 8;
        totalCards = 8;
    }

    numOfUniqueCards = totalCards / 2;
    const displayCards = getDisplayCards(uniqueCards, numOfUniqueCards);

    numOfMatches = 0;
    board.innerHTML = "";

    displayCards.map( (card) => {
        const img = document.createElement("img");
        img.setAttribute("src", "images/memory-game/init.png");
        img.cardName = card.name;
        img.cardImage = card.img;
        img.cardMatched = false;
        img.cardClicked = false;
        img.addEventListener("click", cardClick);
        board.appendChild(img);
    } );

    console.log(displayCards);
}

createBoard();

refreshBtn.addEventListener("click", () => {
    createBoard();
});

