var btn = document.getElementById("nextBtn");
var cHeader = document.getElementById("classHeader");
btn.addEventListener("click", function () {
    var className = document.getElementById("className").value;
    if (className == " ") {
        alert("Enter the class name!");
    }
    else {
        const tempElm = document.getElementById("testElm");
        tempElm.remove();
        cHeader.innerHTML = className;
        var tag = document.createElement("h3");
        tag.style = "text-align: center";
        var text = document.createTextNode("Enter the graded assignment point values for "+ className.trim() + ":");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);
        nextBtn.innerHTML = "Add Assignment";
    }
});
// window.open('calc.html', '_parent');