const resizeHandle = document.querySelector('.resize-handle');
const outputContent = document.querySelector('.output-window');
const minimizeButton = document.querySelector('.minimize');

const defaultOutputHeight = 250;
outputContent.style.height = defaultOutputHeight + 'px';

let isMinimized = false;

resizeHandle.addEventListener('mousedown', (event) => {
    let startY = event.clientY;
    let startHeight = parseInt(document.defaultView.getComputedStyle(outputContent).height, 10);
    
    document.addEventListener('mousemove', onMouseMove);
    
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    });
    
    function onMouseMove(event) {
        const newHeight = startHeight - (event.clientY - startY);
        if (newHeight >= 20 && newHeight <= 600) {
            outputContent.style.height = newHeight + 'px';
        }
    }
});

minimizeButton.addEventListener('click', () => {
    isMinimized = !isMinimized;

    if (isMinimized) {
        minimizeButton.classList.add('rotate-clockwise');
        minimizeButton.classList.remove('rotate-counter-clockwise');
    } else {
        minimizeButton.classList.remove('rotate-clockwise');
        minimizeButton.classList.add('rotate-counter-clockwise');
    }

    if (outputContent.style.height === '4px') {
        outputContent.style.height = defaultOutputHeight + 'px';
        outputContent.style.backgroundColor = '#242424';
    } else {
        outputContent.style.height = '4px';
        outputContent.style.backgroundColor = '#0d7377';
    }
});
