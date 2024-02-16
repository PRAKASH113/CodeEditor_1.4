var selectedContainer = null;
var changedContainers = [];

function createTextFile() {
    // Get the value from the textarea
    const projectName = document.getElementById('projectName').value.trim();

    // Check if projectName is empty
    if (projectName === '') {
        alert('Project name cannot be empty.');
        return false; // Return false indicating file creation failure
    }

    // Check if selectedLanguages array is empty
    if (selectedLanguages.every(lang => lang === null)) {
        alert('Please select at least one language.');
        return false; // Return false indicating file creation failure
    }

    // Check if changedContainers array is empty
    if (changedContainers.length === 0) {
        alert('Please select visibility.');
        return false; // Return false indicating file creation failure
    }

    // If all conditions are met, create the text file
    const fileContent = `Name: ${projectName}\nTemplate: ${selectedLanguages.filter(lang => lang !== null).join(', ')}\nVisibility: ${changedContainers.join(', ')}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a temporary anchor element to download the file
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = `${projectName}.txt`; // Set the filename
    anchor.click();

    return true; // Return true indicating file creation success
}

// Add an event listener to the "createbutton" container to call the createTextFile function when clicked
document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector(".createbutton");

    if (createButton) {
        createButton.addEventListener("click", function() {
            if (createTextFile()) {
                window.location.href = "lodingscreen/index.html";

                // After 10 seconds, redirect to the main screen
                setTimeout(function() {
                    console.log("10 seconds elapsed");
                    // Check if the loading screen is still active
                    if (window.location.pathname.includes("lodingscreen/index.html")) {
                        // Redirect to the main screen
                        console.log("Redirecting to main screen");
                        window.location.href = "mainscreen/index.html";
                    } else {
                        console.log("Loading screen no longer active");
                    }
                }, 10000); // 10 seconds delay
            } else {
                console.log("File creation failed");
            }
        });
    }
});
