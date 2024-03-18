var changedContainers = [];

function changeColor(container) {
    changedContainers.forEach(function(name) {
        document.querySelector("." + name).classList.remove("changed-color");
    });

    if (changedContainers.length > 0) {
        const prevContainer = document.querySelector("." + changedContainers[0]);
        prevContainer.style.backgroundColor = "";
        changedContainers = [];
    }

    container.style.backgroundColor = "#0D7377";

    if (container.classList.contains("Public")) {
        changedContainers.push("Public");
    } else if (container.classList.contains("Private")) {
        changedContainers.push("Private");
    } else if (container.classList.contains("Custom")) {
        changedContainers.push("Custom");
    }
}

