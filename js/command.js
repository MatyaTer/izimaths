let but, cmdValue, day, numdow, dow, numofm, month, year, cusBG;
let d = new Date();
let doc = document.documentElement; 
let listofmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let listofdow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.onkeypress = function (e) {
    but = event.keyCode;
    if (but == 99) {
        checkComm();
    }
};


function checkComm() {
    cmdValue = prompt('Insert a command');
    switch (cmdValue) {
        case 'checkDate()':
            day = d.getDate();
            numdow = d.getDay();
            dow = listofdow[numdow];
            numofm = d.getMonth();
            month = listofmonths[numofm];
            year = d.getFullYear();
            if ((day !== 1)&&(day !== 2)&&(day !== 3)&&(day !== 21)&&(day !== 22)&&(day !== 23)&&(day !== 31)) {
                alert(`Today is ${dow}, the ${day}th of ${month}, ${year}`);
            }
            else if (day == 1||21||31) {
                alert(`Today is ${dow}, the ${day}st of ${month}, ${year}`);
            }
            else if (day == 2||22) {
                alert(`Today is ${dow}, the ${day}nd of ${month}, ${year}`);
            }
            else if (day == 3||23) {
                alert(`Today is ${dow}, the ${day}rd of ${month}, ${year}`);
            }
            break;
        case "checkTime()":
            alert(d.toLocaleTimeString());
            break;
        case "print()":
            window.print();
            break;
//graph. and functionTable. print() works at "Get parabola properties" page.
        case "graph.print()":
            if(typeof(document.getElementById('Skiza')) != 'undefined' && document.getElementById('Skiza') != null){
                var printContents = document.getElementById("Skiza").innerHTML;
			    var originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
			    window.print();
			    document.body.innerHTML = originalContents;
            } else{
                alert('Sorry, but this page does not support this command');
            }
            break;
        case "functionTable.print()":
            if(typeof(document.getElementById('funcTab')) != 'undefined' && document.getElementById('funcTab') != null){
                var printContents = document.getElementById("funcTab").innerHTML;
			    var originalContents = document.body.innerHTML;
                document.body.innerHTML = `<table style="border: 2px solid grey; font-size: 30px; border-collapse: collapse; background-color: lightgrey;" id="funcTab">${printContents}</table>`;
                funcIns();
			    window.print();
			    document.body.innerHTML = originalContents;
            } else{
                alert('Sorry, but this page does not support this command');
            }
            break;
        case "easterEgg()":
            document.getElementById('Hom').classList.remove('navigator_ue');
            document.getElementById('About').classList.remove('navigator_ue');
            document.getElementById('Pro').classList.remove('navigator_ue');
            document.getElementById('Contact').classList.remove('navigator_ue');
            document.getElementById('Hom').classList.add('navigator_e');
            document.getElementById('About').classList.add('navigator_e');
            document.getElementById('Pro').classList.add('navigator_e');
            document.getElementById('Contact').classList.add('navigator_e');
            break;
        case "disableEasterEgg()":
            document.getElementById('Hom').classList.remove('navigator_e');
            document.getElementById('About').classList.remove('navigator_e');
            document.getElementById('Pro').classList.remove('navigator_e');
            document.getElementById('Contact').classList.remove('navigator_e');
            document.getElementById('Hom').classList.add('navigator_ue');
            document.getElementById('About').classList.add('navigator_ue');
            document.getElementById('Pro').classList.add('navigator_ue');
            document.getElementById('Contact').classList.add('navigator_ue');
            break;
        case "setFooterColor()":
            document.getElementById('foot').style.backgroundColor = prompt("Insert a color");
            break;
        case "setFooterColorDefault()":
            document.getElementById('foot').style.backgroundColor = "slategrey";
            break;
        case "setCustomBackground()":
            cusBG = prompt("Write here url of image:");
            document.body.style.backgroundImage = `url("${cusBG}")`;
            break;
        case "setDefaultBackground()":
            document.body.style.backgroundImage = 'url("maths.jpg")';
            break;
        case "encodeText()":
            alert(window.btoa(prompt('Insert text:')));
            break;
        case "decodeText()":
            alert(window.atob(prompt('Insert text:')));
            break;
        case "author.get()":
            alert('Author of this website is Matt Terekhov from "Terekhovy"');
            break;
        default:
            alert("Sorry, but we don't know this command. Please try again later.");
    }
}