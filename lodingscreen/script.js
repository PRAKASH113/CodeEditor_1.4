const quotes = [
    "Debugging: Removing the needles from the haystack.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 equals Dec 25.",
    "Ankit tu chutiya hai - Segmentation fault (core dumped)."
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function rotateQuotes() {
    const quoteElement = document.getElementById('quote-text');
    let index = 0;
    
    shuffle(quotes);
    quoteElement.textContent = quotes[index];

    setInterval(() => {
        index = (index + 1) % quotes.length;
        quoteElement.textContent = quotes[index];
    }, 3000);
}

function animateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const containerWidth = document.querySelector('.progress-container').offsetWidth;
    progressBar.style.width = containerWidth + 'px';

    setTimeout(() => {
        window.location.href = 'mainscreen/index.html';
    }, 5000);
}

window.addEventListener('load', () => {
    rotateQuotes();
    animateProgressBar();
});
