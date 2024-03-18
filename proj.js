var selectedContainer = null;
var changedContainers = [];

function createTextFile() {
    const projectName = document.getElementById('projectName').value.trim();

    if (projectName === '') {
        alert('Project name cannot be empty.');
        return false;
    }

    if (selectedLanguages.every(lang => lang === null)) {
        alert('Please select at least one language.');
        return false;
    }

    if (changedContainers.length === 0) {
        alert('Please select visibility.');
        return false;
    }

    const fileContent = `Name: ${projectName}\nTemplate: ${selectedLanguages.filter(lang => lang !== null).join(', ')}\nVisibility: ${changedContainers.join(', ')}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });

    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = `${projectName}.txt`;
    anchor.click();

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector(".createbutton");

    if (createButton) {
        createButton.addEventListener("click", function() {
            if (createTextFile()) {
                window.location.href = "lodingscreen/index.html";

                setTimeout(function() {
                    console.log("10 seconds elapsed");
                    if (window.location.pathname.includes("lodingscreen/index.html")) {
                        console.log("Redirecting to main screen");
                        window.location.href = "mainscreen/index.html";
                    } else {
                        console.log("Loading screen no longer active");
                    }
                }, 10000);
            } else {
                console.log("File creation failed");
            }
        });
    }
});
