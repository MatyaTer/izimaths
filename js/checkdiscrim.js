//Get variables
let cBox1, cBox2;
let userAns1, userAns2;
window.onload = function () {
    let a, b, c, ans1, ans2, prov1, prov2, prov3a, prov3b, provEnd1, provEnd2, niz, checkPos, numOfAns, numOfAnsUsed;
    cBox1 = document.getElementById('isA');
    cBox2 = document.getElementById('isB');
    cBox1.checked = true;
    cBox2.checked = true;
};

//Check checkboxes
function checkBoxA() {
    if (cBox1.checked == true) {
        document.getElementById('ansA').readOnly = false;
        document.getElementById('ansA').placeholder = "a";
        document.getElementById('ansA').style.color = "black";
        document.getElementById('ansA').style.backgroundColor = "white";
    }
    else {
        document.getElementById('ansA').readOnly = true;
        document.getElementById('ansA').placeholder = "";
        document.getElementById('ansA').style.color = "lightGrey";
        document.getElementById('ansA').style.backgroundColor = "lightGrey";
    }
}
function checkBoxB() {
    if (cBox2.checked == true) {
        document.getElementById('ansB').readOnly = false;
        document.getElementById('ansB').placeholder = "b";
        document.getElementById('ansB').style.color = "black";
        document.getElementById('ansB').style.backgroundColor = "white";
    }
    else {
        document.getElementById('ansB').readOnly = true;
        document.getElementById('ansB').placeholder = "";
        document.getElementById('ansB').style.color = "lightGrey";
        document.getElementById('ansB').style.backgroundColor = "lightGrey";
    }
}

function clearForm() {
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
    document.getElementById('numC').value = '';
    document.getElementById('ansA').value = '';
    document.getElementById('ansB').value = '';
}
//Check ansers
function isCorrect() {
    //Get data
    a = document.getElementById('numA').value;
    b = document.getElementById('numB').value;
    c = document.getElementById('numC').value;
    ans1 = document.getElementById('ansA').value;
    ans2 = document.getElementById('ansB').value;

    prov1 = 0 - b;
    niz = 2 * a;
    checkPos = b ** 2 - 4 * a * c;

    //First stage of the check ansers + check is number of ansers correct
    if (checkPos == 0) {
        prov2 = Math.sqrt(checkPos);
        prov3a = prov1 + prov2;
        provEnd1 = prov3a / niz;
        numOfAns = 1;
    }
    else if (checkPos > 0) {
        prov2 = Math.sqrt(checkPos);
        prov3a = prov1 + prov2;
        prov3b = prov1 - prov2;
        provEnd1 = prov3a / niz;
        provEnd2 = prov3b / niz;
        numOfAns = 2;
    }
    else {
        numOfAns = 0;
    }

    if (cBox1.checked == true && cBox2.checked == true) {
        numOfAnsUsed = 2;
    }
    else if (cBox1.checked == false && cBox2.checked == false) {
        numOfAnsUsed = 0;
    }
    else {
        numOfAnsUsed = 1;
    }

    if (numOfAns !== numOfAnsUsed) {
        if (numOfAns !== 0) {
            if (confirm("Number of the answers is wrong!!! Do you want to continue?")) {
                stageTwo();
            }
            else {
                alert("Try again");
            }
        }
        else {
            if (confirm("Number of the answers is wrong!!! There is no answer. Do you want to clear the textboxes?")) {
                clearForm();
            }
            else {
                alert("OK. Try again");
            }
        }
    }
    else {
        alert("Number of answers is right: " + numOfAns);
        stageTwo();
    }
}
//Check right ansers
function stageTwo() {
    userAns1 = document.getElementById('ansA').value;
    userAns2 = document.getElementById('ansB').value;

    if (numOfAns == 0 && numOfAnsUsed == 0) {
        if (confirm("Right, there is no answer!!! Do you want to clear the textboxes?")) {
            clearForm();
        }
        else {
            alert("OK, good luck!");
        }
    }
    else if (numOfAns == 2) {
        if ((provEnd1 == userAns1 && provEnd2 == userAns2) || (provEnd2 == userAns1 && provEnd1 == userAns2)) {
            if (confirm("Right, there are two correct answers: " + provEnd1 + " and " + provEnd2 + ". Do you want to clear the textboxes?")) {
                clearForm();
            }
            else {
                alert("OK, good luck!");
            }
        }
        else {
            alert("Wrong!!!");
        }
    }
    else if (provEnd1 == userAns1 || provEnd1 == userAns2) {
        if (confirm("Right, there is one correct answers: " + provEnd1 + ". Do you want to clear the textboxes?")) {
            clearForm();
        }
        else {
            alert("OK, good luck!");
        }
    }
    else {
        alert("Wrong!!!");
    }
}