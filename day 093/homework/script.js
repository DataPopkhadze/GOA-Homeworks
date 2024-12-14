let cookies = 0;
let gold = 0;
let cookiePerClick = 1;
let goldPerClick = 1;

const cookieDisplay = document.getElementById("cookies");
const goldDisplay = document.getElementById("gold");
const cookieBtn = document.getElementById("cookie-btn");
const biggerFingerBtn = document.getElementById("bigger-finger");
const betterMinesBtn = document.getElementById("better-mines");
const doubleCookiesBtn = document.getElementById("double-cookies");

cookieBtn.addEventListener("click", () => {
    cookies += cookiePerClick;
    gold += goldPerClick;
    updateDisplay();
    updateButtons();
});

biggerFingerBtn.addEventListener("click", () => {
    const cost = getGadgetCost(biggerFingerBtn);
    if (gold >= cost) {
        cookiePerClick += 1;
        gold -= cost;
        updateDisplay();
        updateButtons();
    }
});

betterMinesBtn.addEventListener("click", () => {
    const cost = getGadgetCost(betterMinesBtn);
    if (cookies >= cost) {
        goldPerClick += 1;
        cookies -= cost;
        updateDisplay();
        updateButtons();
    }
});

doubleCookiesBtn.addEventListener("click", () => {
    const cost = getGadgetCost(doubleCookiesBtn);
    if (gold >= cost) {
        cookiePerClick *= 2;
        gold -= cost;
        updateDisplay();
        updateButtons();
    }
});

function updateDisplay() {
    cookieDisplay.textContent = cookies;
    goldDisplay.textContent = gold;
}

function updateButtons() {
    biggerFingerBtn.disabled = gold < getGadgetCost(biggerFingerBtn);
    betterMinesBtn.disabled = cookies < getGadgetCost(betterMinesBtn);
    doubleCookiesBtn.disabled = gold < getGadgetCost(doubleCookiesBtn);

    biggerFingerBtn.textContent = `Bigger Finger (${getGadgetCost(biggerFingerBtn)} Gold)`;
    betterMinesBtn.textContent = `Better Mines (${getGadgetCost(betterMinesBtn)} Cookies)`;
    doubleCookiesBtn.textContent = `Double Cookies (${getGadgetCost(doubleCookiesBtn)} Gold)`;
}

function getGadgetCost(button) {
    if (button === biggerFingerBtn) {
        return 50 * Math.pow(2, cookiePerClick - 1);
    } 
    
    else if (button === betterMinesBtn) {
        return 100 * Math.pow(2, goldPerClick - 1);
    } 
    
    else if (button === doubleCookiesBtn) {
        return 200 * Math.pow(2, Math.log2(cookiePerClick));
    }
}
