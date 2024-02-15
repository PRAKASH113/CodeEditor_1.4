var selectedContainer = null;

function createTextFile() {
    // Get the value from the textarea
    const projectName = document.getElementById('projectName').value.trim();

    // Check if projectName is empty
    if (projectName === '') {
        alert('Project name cannot be empty.');
        return;
    }

    // Check if selectedLanguages array is empty
    if (selectedLanguages.every(lang => lang === null)) {
        alert('Please select at least one language.');
        return;
    }

    // Check if changedContainers array is empty
    if (changedContainers.length === 0) {
        alert('Please select visibility.');
        return;
    }

    // If all conditions are met, create the text file
    const fileContent = `Name: ${projectName}\nTemplate: ${selectedLanguages.filter(lang => lang !== null).join(', ')}\nVisibility: ${selectedContainer ? selectedContainer.classList[0] : 'None'}`;
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
