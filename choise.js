var selectedLanguages = [null, null, null];

function removeChild(child) {
    child.style.height = "0";
    child.style.margin = "0";
    child.querySelector(".text").style.fontSize = "0";
}

function getBackChild(child) {
    if (child) {
        child.style.height = "";
        child.style.margin = "";
        const textElement = child.querySelector(".text");
        if (textElement) {
            textElement.style.fontSize = "";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".child");
    const choiseContainers = document.querySelectorAll(".choise-container");

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const language = item.querySelector(".text").textContent.trim();
            const index = selectedLanguages.findIndex(lang => lang === null);

            if (index === -1) {
                console.log("Array is full. Cannot select more languages.");
                return;
            }

            removeChild(item);
            selectedLanguages[index] = language;

            const imageElement = document.createElement("img");
            imageElement.src = `assets/assets3/${language}.jpg`;
            imageElement.alt = language;
            choiseContainers[index].innerHTML = "";
            choiseContainers[index].appendChild(imageElement);

            imageElement.addEventListener("load", function() {
                const containerWidth = choiseContainers[index].clientWidth;
                const containerHeight = choiseContainers[index].clientHeight;
                const imgWidth = imageElement.naturalWidth;
                const imgHeight = imageElement.naturalHeight;
                const imgAspectRatio = imgWidth / imgHeight;

                let newImgWidth, newImgHeight;
                if (imgAspectRatio > containerWidth / containerHeight) {
                    newImgWidth = containerWidth;
                    newImgHeight = newImgWidth / imgAspectRatio;
                } else {
                    newImgHeight = containerHeight;
                    newImgWidth = newImgHeight * imgAspectRatio;
                }

                imageElement.style.width = `${newImgWidth}px`;
                imageElement.style.height = `${newImgHeight}px`;
                choiseContainers[index].style.width = `${newImgWidth}px`;
                choiseContainers[index].style.height = `${newImgHeight}px`;
            });
        });
    });

    choiseContainers.forEach(function(container) {
        container.addEventListener("click", function() {
            const language = container.querySelector("img").alt;
            const index = selectedLanguages.findIndex(lang => lang === language);

            for (let i = index; i < selectedLanguages.length - 1; i++) {
                selectedLanguages[i] = selectedLanguages[i + 1];
            }
            selectedLanguages[selectedLanguages.length - 1] = null;

            getBackChild(document.querySelector(`.child.${language}`));
            container.innerHTML = "";

            container.style.width = '';

            for (let i = 0; i < selectedLanguages.length; i++) {
                const currentContainer = choiseContainers[i];
                if (selectedLanguages[i]) {
                    currentContainer.innerHTML = `<img src="assets/assets3/${selectedLanguages[i]}.jpg" alt="${selectedLanguages[i]}">`;
                } else {
                    currentContainer.innerHTML = "";
                }
            }
        });
    });

});
