// Array of fortune messages
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

// Color palettes for different themes
const textColors = ["#333", "#fff", "#764ba2", "#ff6b6b", "#4ecdc4", "#ffe66d"];
const bgColors = ["#ffd700", "#667eea", "#764ba2", "#ff6b6b", "#4ecdc4", "#95e1d3"];
const borderColors = ["#ff6b6b", "#333", "#ffd700", "#667eea", "#4ecdc4", "#fff"];
const fontStyles = [
    { size: "1.5em", family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { size: "1.8em", family: "'Georgia', serif" },
    { size: "1.6em", family: "'Courier New', monospace" },
    { size: "1.4em", family: "'Comic Sans MS', cursive" },
    { size: "1.7em", family: "'Trebuchet MS', sans-serif" }
];

// Track current selections
let currentTextColorIndex = 3;
let currentBgColorIndex = 0;
let currentBorderColorIndex = 0;
let currentFontStyleIndex = 0;

// DOM elements
const fortuneText = document.getElementById('fortuneText');
const fortuneBox = document.getElementById('fortuneBox');
const fontColorBtn = document.getElementById('fontColorBtn');
const bgColorBtn = document.getElementById('bgColorBtn');
const borderColorBtn = document.getElementById('borderColorBtn');
const fontStyleBtn = document.getElementById('fontStyleBtn');

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    displayRandomFortune();
    applyCurrentStyles();
});

// Display a random fortune
function displayRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
}

// Apply current style configuration
function applyCurrentStyles() {
    fortuneText.style.color = textColors[currentTextColorIndex];
    fortuneBox.style.backgroundColor = bgColors[currentBgColorIndex];
    fortuneBox.style.borderColor = borderColors[currentBorderColorIndex];
    
    const currentFont = fontStyles[currentFontStyleIndex];
    fortuneText.style.fontSize = currentFont.size;
    fortuneText.style.fontFamily = currentFont.family;
}

// Font color button - cycle through text colors
fontColorBtn.addEventListener('click', () => {
    currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
    applyCurrentStyles();
});

// Background color button - cycle through background colors
bgColorBtn.addEventListener('click', () => {
    currentBgColorIndex = (currentBgColorIndex + 1) % bgColors.length;
    applyCurrentStyles();
});

// Border color button - cycle through border colors
borderColorBtn.addEventListener('click', () => {
    currentBorderColorIndex = (currentBorderColorIndex + 1) % borderColors.length;
    applyCurrentStyles();
});

// Font style button - cycle through font styles
fontStyleBtn.addEventListener('click', () => {
    currentFontStyleIndex = (currentFontStyleIndex + 1) % fontStyles.length;
    applyCurrentStyles();
});