// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let totalHeadChanges = 0;
let totalMiddleChanges = 0;
let totalBottomChanges = 0;

let catchPhrases = [];

headDropdown.addEventListener('change', () => {
    const userChoice = headDropdown.value;
    totalHeadChanges++;
    headEl.style.backgroundImage = `url(./assets/${userChoice}-head.png)`;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    const userChoice = middleDropdown.value;
    totalMiddleChanges++;
    middleEl.style.backgroundImage = `url(./assets/${userChoice}-middle.png)`;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    const userChoice = bottomDropdown.value;
    totalBottomChanges++;
    bottomEl.style.backgroundImage = `url(./assets/${userChoice}-pants.png)`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    const userChoice = catchphraseInput.value;
    catchPhrases.push(catchphraseInput.value);
    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You changed the head ${totalHeadChanges} times, the middle ${totalMiddleChanges} times and the bottom ${totalBottomChanges} times`;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    catchPhrases.forEach((catchPhrase) => {
        const newCatchPhrase = document.createElement('li');
        const userChoice = catchphraseInput.value;
        catchphrasesEl.appendChild(newCatchPhrase);
        newCatchPhrase.classList.add('catchPhrase');
        newCatchPhrase.textContent = catchPhrase;
    });
}
