window.hideChild = function (childElement) {
    childElement.style.height = "0";
    childElement.style.marginBottom = "0";
    var textElement = childElement.getElementsByClassName("text")[0];
    textElement.style.fontSize = "0";

};

window.filterList = function () {
    var input = document.getElementById("searchInput").value.toUpperCase();
    var list = document.getElementsByClassName("child");

    for (var i = 0; i < list.length; i++) {
        var textElement = list[i].getElementsByClassName("text")[0];
        var text = textElement.textContent || textElement.innerText;

        if (text.toUpperCase().indexOf(input) > -1) {
            list[i].style.display = "";
        } else {
            hideChild(list[i]);
        }
    }
};


