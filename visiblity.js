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

