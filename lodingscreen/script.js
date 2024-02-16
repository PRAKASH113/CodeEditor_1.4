// Array of quotes
const quotes = [
    "Debugging: Removing the needles from the haystack.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 equals Dec 25.",
    "Ankit tu chutiya hai - Segmentation fault (core dumped)."
];

// Shuffle function to randomly reorder array elements
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Rotate quotes every 3 seconds
function rotateQuotes() {
    const quoteElement = document.getElementById('quote-text');
    let index = 0;
    
    // Shuffle the array of quotes initially
    shuffle(quotes);
    quoteElement.textContent = quotes[index];

    setInterval(() => {
        index = (index + 1) % quotes.length;
        quoteElement.textContent = quotes[index];
    }, 3000);
}

// Animate progress bar and redirect to new page when filled
function animateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const containerWidth = document.querySelector('.progress-container').offsetWidth;
    progressBar.style.width = containerWidth + 'px'; // Fill progress bar to container width

    // Redirect to new page when progress bar is filled
    setTimeout(() => {
        window.location.href = 'mainscreen/index.html';
    }, 8000); // Redirect after 8 seconds (same as progress bar animation duration)
}

// Call rotateQuotes and animateProgressBar when the page loads
window.addEventListener('load', () => {
    rotateQuotes();
    animateProgressBar();
});
