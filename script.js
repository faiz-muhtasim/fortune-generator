const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your time is limited, don't waste it living someone else's life.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is during our darkest moments that we must focus to see the light.",
    "The way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "You learn more from failure than from success.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The only impossible journey is the one you never begin.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there."
];

const themes = [
    {
        textColor: "yellow",
        bgColor: "purple",
        borderColor: "red",
        fontSize: "1.5em",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    {
        textColor: "blue",
        bgColor: "white",
        borderColor: "yellow",
        fontSize: "1.8em",
        fontFamily: "'Roboto', sans-serif"
    },
    { 
        textColor: "#ff6b6b",
        bgColor: "#4ecdc4",
        borderColor: "#333",
        fontSize: "1.6em",
        fontFamily: "'Georgia', serif"
    },
    {  
        textColor: "#333",
        bgColor: "#ffd700",
        borderColor: "#764ba2",
        fontSize: "1.7em",
        fontFamily: "'Courier New', monospace"
    }
];


const fortuneText = document.getElementById('fortuneText');
const fortuneBox = document.getElementById('fortuneBox');


const fontColorBtn = document.getElementById('fontColorBtn');
const bgColorBtn = document.getElementById('bgColorBtn');
const borderColorBtn = document.getElementById('borderColorBtn');
const fontStyleBtn = document.getElementById('fontStyleBtn');


window.addEventListener('DOMContentLoaded', () => {
    displayRandomFortune();
    applyTheme(themes[0]); 
});


function displayRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
}

function applyTheme(theme) {
    fortuneText.style.color = theme.textColor;
    fortuneBox.style.backgroundColor = theme.bgColor;
    fortuneBox.style.borderColor = theme.borderColor;
    fortuneText.style.fontSize = theme.fontSize;
    fortuneText.style.fontFamily = theme.fontFamily;
}

fontColorBtn.addEventListener('click', () => applyTheme(themes[0]));
bgColorBtn.addEventListener('click', () => applyTheme(themes[1]));
borderColorBtn.addEventListener('click', () => applyTheme(themes[2]));
fontStyleBtn.addEventListener('click', () => applyTheme(themes[3]));
