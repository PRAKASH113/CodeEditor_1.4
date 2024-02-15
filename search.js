document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const listItems = document.querySelectorAll(".child");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        listItems.forEach(function(item) {
            const text = item.querySelector(".text").textContent.toLowerCase();
            if (text.includes(searchText)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
});
