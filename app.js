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

// set state for how many times the user changes the head, middle, and bottom
let totalHeadChanges = 0;
let totalMiddleChanges = 0;
let totalBottomChanges = 0;

// set state for all of the character's catchphrases
let catchPhrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const userChoice = headDropdown.value;
    // increment the head change count state
    totalHeadChanges++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url(./assets/${userChoice}-head.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const userChoice = middleDropdown.value;
    // increment the middle change count state
    totalMiddleChanges++;
    // update the dom for the middle (NOTE: use style.backgroundImage on
    // the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url(./assets/${userChoice}-middle.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const userChoice = bottomDropdown.value;
    // increment the bottom change count state
    totalBottomChanges++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl
    // div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url(./assets/${userChoice}-pants.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    console.log('catchphraseInput.value', catchphraseInput.value);
    // push the new catchphrase to the catchphrase array in state
    catchPhrases.push(catchphraseInput.value);
    console.log(catchPhrases);
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    catchphrasesEl.textContent = catchPhrases;
    // and append that HTML element to the cleared-out DOM
}
