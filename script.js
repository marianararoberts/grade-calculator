var btn = document.getElementById("nextBtn");
var calcBtn = document.getElementById("calcBtn");
var nextBtn = document.getElementById("ugBtn");
var doneBtn = document.getElementById("doneBtn");
var cHeader = document.getElementById("classHeader");
var btn2 = document.getElementById("nextBtn2");
var pointBox = document.getElementById("pointBox");
var earnedBox = document.getElementById("earned");
var totalBox = document.getElementById("total");
var gradedRow = document.getElementById("gRow");
var tag = document.createElement("h3");
var tag2 = document.createElement("h2");
var gradedVal = document.getElementById("point-col");
var gradedPer = document.getElementById("percent-col");
var unGradedVal = document.getElementById("point-ug");
var element = document.getElementById("new");
var hideDiv = document.getElementById("hideCalc");
var hideDiv2 = document.getElementById("hideCalc2");
var hideAvg = document.getElementById("hideAvg");
var percent = document.getElementById("per");
var percentBox = document.getElementById("goalAvg");
var className;
var avg;
var gTotal = 0;
var gEarned = 0;
var text;
var text2;
var text3;
var text4;
var ugTotal = 0;
btn.addEventListener("click", function () {
    className = document.getElementById("className").value;
    if (className == " ") {
        alert("Enter the class name!");
    }
    else {
        const tempElm = document.getElementById("testElm");
        tempElm.remove();
        cHeader.innerHTML = className;
        tag.style = "text-align: center";
        text = document.createTextNode("Enter the graded assignment point values for " + className.trim() + ":");
        tag.appendChild(text);
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
        var heading = document.getElementById("heading");
        heading.style = "display: none;"
    }
});

btn2.addEventListener("click", function () {
    if (earnedBox.value == "" || totalBox.value == "" || totalBox.value == "0") {
        alert("Enter the point values as they appear in PowerSchool! Both boxes should be filled.")
    }
    else {
        if (earnedBox.disabled) {
            ugTotal += parseInt(totalBox.value);
            var pointElm = document.createElement("h2");
            var ugTextElm = document.createTextNode(earnedBox.value + "/" + totalBox.value);
            pointElm.appendChild(ugTextElm);
            unGradedVal.appendChild(pointElm);
            totalBox.value = "";
        }
        else {
            gEarned += parseInt(earnedBox.value);
            gTotal += parseInt(totalBox.value);
            avg = ((gEarned / gTotal) * 100).toFixed(1);
            cHeader.innerHTML = "Current " + className + " Average: " + avg + "%";
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
    }
});

nextBtn.addEventListener("click", function () {
    doneBtn.style = "";
    if (earnedBox.disabled) {
        tag.removeChild(text2);
        tag.appendChild(text);
        earnedBox.type = "number";
        earnedBox.disabled = false;
        earnedBox.value = "";
        nextBtn.innerHTML = "Next"
        doneBtn.style = "display: none";
    }
    else {
        text2 = document.createTextNode("Enter the ungraded assignment point values for " + className.trim() + ":");
        tag.removeChild(text);
        tag.appendChild(text2);
        earnedBox.type = "text";
        earnedBox.disabled = true;
        earnedBox.value = "-";
        nextBtn.innerHTML = "Back";
    }
});

doneBtn.addEventListener("click", function () {
    if (ugTotal == 0) {
        alert("Please enter the point values of an ungraded assignment first.");
    }
    else {
        text3 = document.createTextNode("Enter your goal average for " + className.trim() + ":");
        tag.removeChild(text2);
        tag.appendChild(text3);
        hideAvg.style = "display: none";
        hideDiv2.style = "display: none";
        calcBtn.style = "";
        percent.style = "";
        percentBox.style = "";
    }

});

calcBtn.addEventListener("click", function () {
    // math
    var x = (avg/100)*(gTotal+ugTotal);
    var ugNeeded = x - gEarned;

    calcBtn.style = "display: none";
    percent.style = "display: none";
    text4 = document.createTextNode("In order to achieve a " + percentBox.value + "% in " + className.trim() + ", you must earn "+ ugNeeded.toFixed(1) +" points out of the " + ugTotal + " points in ungraded assignments.");
    tag2.appendChild(text4);
    element.appendChild(tag2);
    element.removeChild(tag);
    percentBox.style = "display: none";
});