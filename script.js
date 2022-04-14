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
var backBtn = document.getElementById("backBtn");
var weightedBox = document.getElementById("weightedBox");
var weightedBoxDiv = document.getElementById("weightedBoxDiv");
var weightedBtn = document.getElementById("addWeighted");
var weightedOptionDiv = document.getElementById("weightedOptionDiv");
var instructions = document.getElementById("instructions");
var weightedCategoriesDiv = document.getElementById("weightedCategoriesDiv");
var weightedCategories = document.getElementById("weightedCategories");
var elements = document.querySelectorAll('.item');
var assignmentName = document.getElementById("assignmentName");
var percentWeight = document.getElementById("perWeight");
var weightedName = document.getElementById("assignment-col");
var weightPer = document.getElementById("weight-col");
var categoriesDropDown = document.getElementById("categoriesDropDown");
var weightedColumn = document.getElementById("weightedColumn");
var weightedColumn2 = document.getElementById("weightedColumn2");
var weightedType = document.getElementById("weighted-col");
var weightedType2 = document.getElementById("ugweighted-col");
var className;
var avg;
var gTotal = 0;
var gEarned = 0;
var text;
var text2;
var text3;
var text4;
var text5;
var ugTotal = 0;
var assignmentCategories = [];
var assignmentPercentages = [];
var divElm = document.createElement("div");
function validate() {
    if (document.getElementById('weightedBox').checked) {
        weightedCategoriesDiv.style = "";
        instructions.style = "";
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexGrow = "0.2433";
        }
        // give option to add assignments and weighting
    } else {
        weightedCategoriesDiv.style = "display: none;"
        instructions.style = "display: none;"
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexGrow = "1";
        }
        // remove option to add assignments and weighting/display:none on the div
    }
}
weightedBtn.addEventListener("click", function () {
    var percent = percentWeight.value;
    var assName = assignmentName.value;
    if (percent == "" || assName == "") {
        alert("Please enter the values for the weighted assignment category.");
    }
    else {
        var category = document.createElement("h3");
        var weight = document.createElement("h3");
        var weightNum = document.createTextNode(percent + "%");
        var categoryName = document.createTextNode(assName);
        weight.appendChild(weightNum);
        category.appendChild(categoryName);
        weightedName.appendChild(category);
        weightPer.appendChild(weight);
        assignmentCategories.push(assName);
        assignmentPercentages.push(percent);
        percentWeight.value = ""
        assignmentName.value = "";
    }
});
btn.addEventListener("click", function () {
    className = document.getElementById("className").value;
    if (className == " ") {
        alert("Enter the class name!");
    }
    else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexGrow = "1";
        }
        weightedCategoriesDiv.style = "display: none;"
        weightedBoxDiv.style = "display: none;"
        if (weightedBox.checked) {
            for (var i = 0; i < assignmentCategories.length; i++) {
                var newCat = document.createElement("option");
                newCat.value = assignmentCategories[i];
                newCat.innerHTML = assignmentCategories[i];
                categoriesDropDown.appendChild(newCat);
            }
            weightedColumn.style = "";
            weightedColumn2.style = "";
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
            weightedOptionDiv.style = "";
            var heading = document.getElementById("heading");
            heading.style = "display: none;"
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
            if (weightedBox.checked) {
                var weightedElm = document.createElement("h2");
                var weightedTextElm = document.createTextNode(categoriesDropDown.value);
                weightedElm.classList.add("small");
                weightedElm.appendChild(weightedTextElm);
                weightedType2.appendChild(weightedElm);
            }
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
            if (weightedBox.checked) {
                var weightedElm = document.createElement("h2");
                var weightedTextElm = document.createTextNode(categoriesDropDown.value);
                weightedElm.classList.add("small");
                weightedElm.appendChild(weightedTextElm);
                weightedType.appendChild(weightedElm);
            }
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
        weightedOptionDiv.style = "display: none";
    }

});

calcBtn.addEventListener("click", function () {
    // math
    var ugNeeded = ((percentBox.value / 100) * (gTotal + ugTotal)) - gEarned;

    calcBtn.style = "display: none";
    percent.style = "display: none";
    text4 = document.createTextNode("In order to achieve a " + percentBox.value + "% in " + className.trim() + ",");
    text5 = document.createTextNode("you must earn " + ugNeeded.toFixed(1) + " points out of the " + ugTotal + " points in ungraded assignments.");
    tag2.appendChild(text4);
    tag2.appendChild(divElm);
    tag2.appendChild(text5);
    element.appendChild(tag2);
    element.removeChild(tag);
    percentBox.style = "display: none";
    backBtn.style = "";
    // possibly add you were x points away from an A, A-, B+, B-, etc
});


backBtn.addEventListener("click", function () {
    element.appendChild(tag);
    element.removeChild(tag2);
    tag.removeChild(text3);
    tag.appendChild(text2);
    tag2.removeChild(text4);
    tag2.removeChild(text5);
    tag2.removeChild(divElm);
    doneBtn.style = "";
    backBtn.style = "display: none";
    hideDiv2.style = "";
    hideAvg.style = "";
    weightedOptionDiv.style = "";
});
