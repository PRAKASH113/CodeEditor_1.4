// Variable to keep track of containers whose color has been changed
var changedContainers = [];

function changeColor(container) {
    // Remove the hover effect from previously changed containers
    changedContainers.forEach(function(name) {
        document.querySelector("." + name).classList.remove("changed-color");
    });

    // Reset color of previously selected container
    if (changedContainers.length > 0) {
        const prevContainer = document.querySelector("." + changedContainers[0]);
        prevContainer.style.backgroundColor = ""; // Reset background color
        changedContainers = []; // Clear the array
    }

    // Change the background color of the clicked container
    container.style.backgroundColor = "#0D7377";

    // Add the class name to the array of changed containers
    if (container.classList.contains("Public")) {
        changedContainers.push("Public");
    } else if (container.classList.contains("Private")) {
        changedContainers.push("Private");
    } else if (container.classList.contains("Custom")) {
        changedContainers.push("Custom");
    }
}

// Function to create a text file
function createTextFile() {
    // Check if any container's color has been changed
    if (changedContainers.length === 0) {
        return; // Exit the function if no color change occurred
    }

    // Get the value from the textarea
    const projectName = document.getElementById('projectName').value.trim();

    // Check if the projectName is empty
    if (projectName === '') {
        return; // Exit the function if projectName is empty
    }

    // Create a new Blob object with the file content
    const fileContent = `Name: ${projectName}\nTemplate: ${selectedLanguages.filter(lang => lang !== null).join(', ')}\nVisibility: ${changedContainers.join(', ')}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a temporary anchor element to download the file
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = `${projectName}.txt`; // Set the filename
    anchor.click();
}

// Add an event listener to the "createbutton" container to call the createTextFile function when clicked
document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector(".createbutton");

    if (createButton) {
        createButton.addEventListener("click", function() {
            createTextFile();
        });
    }
});

// Add event listeners to each container for click events
document.querySelectorAll(".visiblitytoggle > div").forEach(function(container) {
    container.addEventListener("click", function() {
        changeColor(container);
    });
});
