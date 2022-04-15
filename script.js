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
var assignmentEarned = [];
var assignmentTotal = [];
var ugTotalArr = [];
var avgArr = [];
var weightedAvgArr = [];
var divElm = document.createElement("div");
function validate() {
    if (document.getElementById('weightedBox').checked) {
        weightedCategoriesDiv.style = "";
        instructions.style = "";
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexGrow = "0.234";
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
        assignmentPercentages.push(percent / 100);
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
                newCat.value = i;
                newCat.innerHTML = assignmentCategories[i];
                categoriesDropDown.appendChild(newCat);
                assignmentEarned.push(0);
                assignmentTotal.push(0);
                ugTotalArr.push(0);
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
        var selectedCat = categoriesDropDown.value;
        if (earnedBox.disabled) {
            if (weightedBox.checked) {
                var weightedElm = document.createElement("h2");
                var weightedTextElm = document.createTextNode(assignmentCategories[selectedCat]);
                weightedElm.appendChild(weightedTextElm);
                weightedType2.appendChild(weightedElm);
                ugTotalArr[selectedCat] += Number(totalBox.value);
            }
            ugTotal += Number(totalBox.value);
            var pointElm = document.createElement("h2");
            var ugTextElm = document.createTextNode(earnedBox.value + "/" + totalBox.value);
            pointElm.appendChild(ugTextElm);
            unGradedVal.appendChild(pointElm);
            totalBox.value = "";
        }
        else {
            if (weightedBox.checked) {
                assignmentEarned[selectedCat] += Number(earnedBox.value);
                assignmentTotal[selectedCat] += Number(totalBox.value);
                var weightedElm = document.createElement("h2");
                var weightedTextElm = document.createTextNode(assignmentCategories[selectedCat]);
                weightedElm.classList.add("small");
                weightedElm.appendChild(weightedTextElm);
                weightedType.appendChild(weightedElm);
                var newAvg = 0;
                var perTotal = 0;
                for (let i = 0; i < assignmentTotal.length; i++) {
                    var num = roundFunc3(assignmentEarned[i] / assignmentTotal[i]);
                    avgArr[i] = roundFunc1(num * 100);
                    console.log(avgArr[i]);
                }
                for (let i = 0; i < avgArr.length; i++) {
                    weightedAvgArr[i] = Math.round(Number((avgArr[i] * assignmentPercentages[i])) * 10) / 10;
                    if (!Number.isNaN(weightedAvgArr[i])) {
                        newAvg += weightedAvgArr[i];
                        perTotal += assignmentPercentages[i];
                    }
                }
                console.log(weightedAvgArr);
                avg = Math.round(Number((newAvg / perTotal)) * 10) / 10;
            }
            else {
                gEarned += Number(earnedBox.value);
                gTotal += Number(totalBox.value);
                avg = Math.round(Number((gEarned / gTotal) * 100) * 10) / 10;
            }
            var valElm = document.createElement("h2");
            var percentElm = document.createElement("h2");
            valElm.classList.add("small");
            percentElm.classList.add("small");
            var textElm = document.createTextNode(earnedBox.value + "/" + totalBox.value);
            var percent = document.createTextNode(Math.round(Number((earnedBox.value / totalBox.value) * 100) * 10) / 10 + "%");
            valElm.appendChild(textElm);
            percentElm.appendChild(percent);
            gradedVal.appendChild(valElm);
            gradedPer.appendChild(percentElm);
            earnedBox.value = "";
            totalBox.value = "";
            cHeader.innerHTML = "Current " + className + " Average: " + avg + "%";
        }
    }
});

function findPercentage(x) {
    var total = assignmentTotal[x] + ugTotalArr[x];
    var earned = assignmentEarned[x] + ugTotalArr[x];
    var average = ((earned / total) * 100) * assignmentPercentages[x];
    return average;
}

function roundFunc1(x) {
    return Math.round((x) * 10) / 10;
}

function roundFunc2(x) {
    return Math.round((x) * 100) / 100;
}

function roundFunc3(x) {
    return Math.round((x) * 1000) / 1000;
}

function findPoints(x, y) {
    var goalAvg = roundFunc3(roundFunc2(y / assignmentPercentages[x]) / 100)
    var earned = assignmentEarned[x];
    var total = assignmentTotal[x] + ugTotalArr[x];
    var points = roundFunc1(goalAvg * total);
    var neededPoints = roundFunc1(points - earned);
    console.log(goalAvg + ": Goal Average");
    console.log(points + ": Goal Points");
    console.log(earned + ": Earned Points");
    console.log(total + ": Final Total Points");
    console.log((Number(neededPoints) + Number(earned)) + ": Needed+Earned");
    console.log(roundFunc2((Number(neededPoints) + Number(earned)) / Number(total)) + ": Actual Average");
    console.log(neededPoints + ": Needed Points");
    return Number(neededPoints);
}

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
    var ugNeeded = 0;
    var weightTotal = 0;
    var pTotal = 0;
    var str = " points in ungraded assignments.";
    var ugStr = " points in ungraded " + assignmentCategories[getUgNum()] + " assignments.";
    if (weightedBox.checked) {
        ugNeeded = getNeeded(percentBox.value);
        ugTotalArr.forEach(element => {
            weightTotal += element;
        });
        console.log(weightTotal);
        pTotal = weightTotal;
        str = ugStr;
    }
    else {
        ugNeeded = ((percentBox.value / 100) * (gTotal + ugTotal)) - gEarned;
        pTotal = ugTotal;
    }

    calcBtn.style = "display: none";
    percent.style = "display: none";
    text4 = document.createTextNode("In order to achieve a " + percentBox.value + "% in " + className.trim() + ",");
    text5 = document.createTextNode("you must earn " + roundFunc1(ugNeeded) + " points out of the " + pTotal + str);
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

function findCombos(arr1, arr2, n, m, z) {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if ((Number(arr1[i]) + Number(arr2[j])).toFixed(1) == z)
                console.log(arr1[i] + " + " + arr2[j] + " = " + z);
}


function createArr(x, y, z) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 1; i <= x; i += 0.01) {
        arr1.push(i.toFixed(1));
    }
    for (let i = 1; i <= y; i += 0.01) {
        arr2.push(i.toFixed(1));
    }
    findCombos(arr1, arr2, arr1.length, arr2.length, z);
}

function getNeeded(test) {
    var ugNums = [];
    var gNums = [];
    var tx = 0;
    var tt = 0;
    for (let i = 0; i < ugTotalArr.length; i++) {
        if (ugTotalArr[i] > 0) {
            ugNums[tx] = i;
            tx++;
        }
        else {
            gNums[tt] = i;
            tt++;
        }
    }
    if (ugNums.length == 1) {
        var sAvg = test - (avg - weightedAvgArr[ugNums[0]]);
        return findPoints(ugNums[0], sAvg);
    }
    else {
        var sAvg = goalAvg - (weightedAvgArr[gNums[0]] + weightedAvgArr[gNums[1]]);
        createArr(findPercentage(ugNums[0]), findPercentage(ugNums[1]), sAvg);
    }
}

function getUgNum() {
    var ugNums = [];
    var gNums = [];
    var tx = 0;
    var tt = 0;
    for (let i = 0; i < ugTotalArr.length; i++) {
        if (ugTotalArr[i] > 0) {
            ugNums[tx] = i;
            tx++;
        }
        else {
            gNums[tt] = i;
            tt++;
        }
    }
    if (ugNums.length == 1) {
        return ugNums[0];
    }
}