var btn = document.getElementById("nextBtn");
var cHeader = document.getElementById("classHeader");
btn.addEventListener("click", function () {
    var className = document.getElementById("className").value;
    if (className == " ") {
        alert("Enter the class name!");
    }
    else {
        window.open('calc.html', '_parent');
    }
});

