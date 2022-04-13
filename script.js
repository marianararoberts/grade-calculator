var btn = document.getElementById("nextBtn");
var nextBtn = document.getElementById("ugBtn");
var cHeader = document.getElementById("classHeader");
var btn2 = document.getElementById("nextBtn2");
var pointBox = document.getElementById("pointBox");
var earnedBox = document.getElementById("earned");
var totalBox = document.getElementById("total");
var gradedRow = document.getElementById("gRow");
var tag = document.createElement("h3");
var gradedVal = document.getElementById("point-col");
var gradedPer = document.getElementById("percent-col");
btn.addEventListener("click", function () {
    var className = document.getElementById("className").value;
    if (className == " ") {
        alert("Enter the class name!");
    }
    else {
        const tempElm = document.getElementById("testElm");
        tempElm.remove();
        cHeader.innerHTML = className;
        tag.style = "text-align: center";
        var text = document.createTextNode("Enter the graded assignment point values for " + className.trim() + ":");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);
        pointBox.style = "text-align: center";
        btn2.style = "margin-bottom: 35px";
        gradedRow.style = "";
        btn2.innerHTML = "Add Assignment";
        var gradedAHeader = document.getElementById("gradedA");
        gradedAHeader.innerHTML = "Graded Assignments";
        var ungradedAHeader = document.getElementById("unGradedA");
        ungradedAHeader.innerHTML = "Ungraded Assignments";
        btn.style = "display: none;"
        nextBtn.style = "";

    }
});

btn2.addEventListener("click", function () {
    if (earnedBox.value == "" || totalBox.value == "" || totalBox.value == "0") {
        alert("Enter the point values as they appear in PowerSchool! Both boxes should be filled.")
    }
    else {
        var valElm = document.createElement("h2");
        var percentElm = document.createElement("h2");
        valElm.classList.add("small");
        percentElm.classList.add("small");
        var textElm = document.createTextNode(earnedBox.value + "/" + totalBox.value);
        var percent = document.createTextNode(((earnedBox.value / totalBox.value) * 100).toFixed(1) + "%");
        valElm.appendChild(textElm);
        percentElm.appendChild(percent);
        gradedVal.appendChild(valElm);
        gradedPer.appendChild(percentElm);
        earnedBox.value = "";
        totalBox.value = "";
    }
});

nextBtn.addEventListener("click", function () {
    // change to ungraded, change text for tag elm
    // switch btn to modify ungraded,  
    // maybe add boolean: if true, add to graded, if false, add to ungraded: option to go back back button should appear next to the next button once you click next
});
// window.open('calc.html', '_parent');