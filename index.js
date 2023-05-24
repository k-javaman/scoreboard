let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let count = 0;

function homeOne() {
    count += 1;
    homeScoreEl.textContent = count
}

function homeTwo() {
    count += 2;
    homeScoreEl.textContent = count
}

function homeThree() {
    count += 3;
    homeScoreEl.textContent = count
}

function guestOne() {
    count += 1;
    guestScoreEl.textContent = count
}

function guestTwo() {
    count += 2;
    guestScoreEl.textContent = count
}

function guestThree() {
    count += 3;
    guestScoreEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}