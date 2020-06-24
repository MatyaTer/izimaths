//The anser is (-b±√(b²-4ac))/2a
let a, b, c, inkoren, koren, preans1, preans2, niz, ans1, ans2;
function ques() {
    a = document.getElementById('givea').value;
    b = document.getElementById('giveb').value;
    c = document.getElementById('givec').value;
    inkoren = b ** 2 - 4 * a * c;
    koren = Math.sqrt(inkoren);
    preans1 = -b + koren;
    niz = 2 * a;
    ans1 = preans1 / niz;

    if (inkoren > 0) {
        preans2 = -b - koren;
        ans2 = preans2 / niz;
        alert("Your first number is " + ans1);
        alert("Your second number is " + ans2);
    }
    else if (inkoren < 0) {
        alert("There is no answer")
    }
    else {
        alert("Your number is " + ans1);
    }
}