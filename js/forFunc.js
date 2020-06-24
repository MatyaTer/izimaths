//Create variables
let theChosenOne, funcType, a, b, c, symmetry, withY, checkNumAns, numAns, ans1, ans2, zeroDot, yDirect, direct, directType, upper, downer, posit, negat, drA, drB, drC;
//When button "Choose type of function insert" is pressed
function tipFunc() {

	theChosenOne = document.getElementById('vybor').value;
	setTextValues("", "", "", "", "", "", "", "", "", "", "");

	if (theChosenOne == "ax^2+bx+c") {
		funcType = "standart";
		document.getElementById('dataIn').innerHTML = '<input id="1a" placeholder="  a ">x<sup>2</sup>+<input id="1b" placeholder="  b ">x+<input id="1c" placeholder="  c ">';
	}
	else if (theChosenOne == "a(x-x1)(x-x2)") {
		funcType = "makhpela";
		document.getElementById('dataIn').innerHTML = '<input id="2a" placeholder="  a ">(x-<input id="2b" placeholder=" x1 ">)(x-<input id="2c" placeholder=" x2 ">)';
	}
	else if (theChosenOne == "a(x-p)^2+k") {
		funcType = "kodkod";
		document.getElementById('dataIn').innerHTML = '<input id="3a" placeholder="  a ">(x-<input id="3b" placeholder="  p ">)<sup>2</sup>+<input id="3c" placeholder="  k ">';
	}
	else {
		funcType = "none";
		document.getElementById('dataIn').innerHTML = "";
		alert("Please choose the type of the function and write it in.");
	}
	//Get properties
}

function letsCount() {
	if (funcType == "none") {
		alert("Please choose the type of the function and write it in.");
	}
	//x²+b+c
	else if (funcType == "standart") {
		a = parseInt(document.getElementById('1a').value);
		b = parseInt(document.getElementById('1b').value);
		c = parseInt(document.getElementById('1c').value);
		symmetry = -b / (2 * a);				//Axis of symmetry
		withY = "(0, " + c + ")";				//Intersaction with y axis
		checkNumAns = b ** 2 - (4 * a * c);		//Number of zero points
		if (checkNumAns > 0) {
			numAns = 2;
			ans1 = (-b + Math.sqrt(checkNumAns)) / (2 * a);
			ans2 = (-b - Math.sqrt(checkNumAns)) / (2 * a);
			zeroDot = "(" + ans1 + ", 0); (" + ans2 + ", 0)";	//Zero points
		}
		else if (checkNumAns == 0) {
			ans1 = symmetry;
			zeroDot = "(" + ans1 + ", 0)";						//Zero point
			numAns = 1;
		}
		else {
			zeroDot = "There is no any zero point";				//No zero point
			numAns = 0;
		}


		yDirect = symmetry ** 2 * a + b * symmetry + c;		//y of directrix
		direct = "(" + symmetry + ", " + yDirect + ")";		//Directrix

		//Directrix type
		if (a > 0) {
			directType = "min";
		}
		else if (a < 0) {
			directType = "max";
		}
		else {
			directType = "error";
			alert('ERROR!!!');
		}

		//Increase - upper, decrease - downer, positive -posit, negative - negat
		if (directType == "min") {
			upper = "x>" + symmetry;
			downer = "x<" + symmetry;
			if (numAns == 0) {
				posit = "Always";
				negat = "Never";
			}
			else if (numAns == 1) {
				posit = "x≠" + symmetry;
				negat = "Never";
			}
			else if (ans1 < ans2) {
				posit = "x<" + ans1 + ", x>" + ans2;
				negat = ans1 + "<x<" + ans2;
			}
			else if (ans1 > ans2) {
				posit = "x<" + ans2 + ", x>" + ans1;
				negat = ans2 + "<x<" + ans1;
			}
		}
		else {
			upper = "x<" + symmetry;
			downer = "x>" + symmetry;
			if (numAns == 0) {
				negat = "Always";
				posit = "Never";
			}
			else if (numAns == 1) {
				negat = "x≠" + symmetry;
				posit = "Never";
			}
			else if (ans1 < ans2) {
				negat = `x< ${ans1}; x>${ans2}`;
				posit = `${ans1} <x< ${ans2}`;
			}
			else if (ans1 > ans2) {
				negat = `x<${ans2}; x> ${ans1}`;
				posit = `${ans2} <x< ${ans1}`;
			}
		}
		drA = a;
		drB = b;
		drC = c;
	}
	//a(x-x1)(x-x2)            x1=>b     x2=>c
	else if (funcType == "makhpela") {
		a = parseInt(document.getElementById('2a').value);
		b = parseInt(document.getElementById('2b').value);
		c = parseInt(document.getElementById('2c').value);
		symmetry = (b + c) / 2;							//Axis of symmetry
		withY = "(0, " + a * (-b) * (-c) + ")";			//Intersaction with y axis
		if (b !== c) {
			if (b < c) {
				zeroDot = `(${b}, 0); (${c}, 0)`;		//Zero points
			}
			else {
				zeroDot = `(${c}, 0); (${b}, 0)`;		//Zero points
			}
		}
		else {
			zeroDot = `(${c}, 0)`;						//Zero point
		}
		yDirect = a * (symmetry - b) * (symmetry - c);	//y of directrix
		direct = `(${symmetry}, ${yDirect})`			//Directrix
		
		//Directrix type
		if (a > 0) {
			directType = "min";
		}
		else if (a < 0) {
			directType = "max";
		}
		else {
			directType = "Error";
			alert("ERROR!!!");
		}

		//Increase - upper, decrease - downer, positive -posit, negative - negat
		if (directType == "min") {
			upper = `x>${symmetry}`;
			downer = `x<${symmetry}`;
			if (b > c) {
				posit = `x<${c}, x>${b}`;
				negat = `${c}<x<${b}`;
			}
			else if (b < c) {
				posit = `x<${b}, x>${c}`;
				negat = `${b}<x<${c}`;
			}
			else {
				posit = `x≠${symmetry}`;
				negat = "Never";
			}
		}
		if (directType == "max") {
			upper = `x<${symmetry}`;
			downer = `x>${symmetry}`;
			if (b > c) {
				negat = `x<${c}; x>${b}`;
				posit = `${c}<x<${b}`;
			}
			else if (b < c) {
				negat = `x<${b}; x>${c}`;
				posit = `${b}<x<${c}`;
			}
			else {
				negat = `x≠${symmetry}`;
				posit = "Never";
			}
		}
		drA = a;
		drB = -b - c;
		drC = -b * -c;
	}

	//a(x-p)²+k            p => b,  k => c
	else if (funcType == "kodkod") {
		a = parseInt(document.getElementById('3a').value);
		b = parseInt(document.getElementById('3b').value);
		c = parseInt(document.getElementById('3c').value);
		symmetry = b;												//Axis of symmetry
		withY = "(0, " + (b ** 2 * a + c) + ")";					//Intersaction with y axis
		checkNumAns = -(c / a);										
		if (checkNumAns > 0) {
			numAns = 2;
			ans1 = b + (Math.sqrt(checkNumAns));
			ans2 = b - (Math.sqrt(checkNumAns));
			if (ans1 > ans2) {
				zeroDot = "(" + ans2 + ", 0); (" + ans1 + ", 0)"	//Zero points
			}
			else {
				zeroDot = "(" + ans1 + ", 0); (" + ans2 + ", 0)"	//Zero points
			}
		}
		else if (checkNumAns == 0) {
			numAns = 1;
			ans1 = b + (Math.sqrt(checkNumAns));
			zeroDot = "(" + ans1 + ", 0)";							//Zero point
		}
		else {
			numAns = 0;
			zeroDot = "There is no any zero point";					//No zero points
		}
		yDirect = a * (symmetry - b) ** 2 + c;						//y of directrix
		direct = "(" + symmetry + ", " + yDirect + ")"				//Directrix
		
		//Directrix type
		if (a > 0) {
			directType = "min";
		}
		else if (a < 0) {
			directType = "max";
		}
		else {
			directType = "Error";
			alert("ERROR!!!");
		}

		//Increase - upper, decrease - downer, positive -posit, negative - negat
		if (directType == "min") {
			upper = "x>" + symmetry;
			downer = "x<" + symmetry;
			if (numAns == 0) {
				posit = "Always";
				negat = "Never";
			}
			else if (numAns == 1) {
				posit = "x≠" + symmetry;
				negat = "Never";
			}
			else if (ans1 < ans2) {
				posit = "x<" + ans1 + ", x>" + ans2;
				negat = ans1 + "<x<" + ans2;
			}
			else if (ans1 > ans2) {
				posit = `x< ${ans2} , x> ${ans1}`;
				negat = `${ans2} <x< ${ans1}`;
			}
		}
		else {
			upper = "x<" + symmetry;
			downer = "x>" + symmetry;
			if (numAns == 0) {
				negat = "Always";
				posit = "Never";
			}
			else if (numAns == 1) {
				negat = "x≠" + symmetry;
				posit = "Never";
			}
			else if (ans1 < ans2) {
				negat = `x< ${ans1}; x> ${ans2}`;
				posit = `${ans1} <x< ${ans2}`;
			}
			else if (ans1 > ans2) {
				negat = `x< ${ans2}; x> ${ans1}`;
				posit = `${ans2} <x< ${ans1}`;
			}
		}
		drA = a;
		drB = -b * 2;
		drC = b * b + c;
	}
	//Creating graph with JSXGraph
	var board = JXG.JSXGraph.initBoard('box', { boundingbox: [-5, 8, 8, -5], axis: true });

	// Macro function plotter
	function addCurve(board, func, atts) {
		var f = board.create('functiongraph', [func], atts);
		return f;
	}

	// Simplified plotting of function
	function plot(func, atts) {
		if (atts == null) {
			return addCurve(board, func, { strokewidth: 2 });
		}
		else {
			return addCurve(board, func, atts);
		}
	}

	// Usage of the macro
	function doIt() {
		console.log(drA);
		eval(`function f(x) {
   return ${drA}*Math.pow(x, 2) + ${drB}*x + ${drC};
}
h = plot(f);`);
	}

	//Clear graph
	function clearAll(board) {
		JXG.JSXGraph.freeBoard(board);
		board = JXG.JSXGraph.initBoard('box', { boundingbox: [-5, 8, 8, -5], axis: true });
		return board;
	}
	//Show ansers
	board = clearAll(board);
	doIt();
	setTextValues("x= " + symmetry, withY, withY, withY, zeroDot, direct, directType, upper, downer, posit, negat);
}
//When function is printed it must be shown right:
function insrep() {
	switch (funcType) {
		case "standart":
			if (a == 1) {
				a = "";
			}
			if (b == 1) {
				b = "";
			}
			break;
		case "makhpela":
			if (a == 1) {
				a = '';
			}
			break;
		case "kodkod":
			if (a == 1) {
				a = "";
			}
			break;
	}
}

function funcIns() {
	switch (funcType) {
		case "standart":
			if ((b > 0) && (c > 0)) {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>+${b}x+${c}`;
			}
			else if ((b > 0) && (c < 0)) {
				c = c * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>+${b}x-${c}`;
			}
			else if ((b < 0) && (c > 0)) {
				b = b * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>-${b}x+${c}`;
			}
			else if ((b < 0) && (c < 0)) {
				b = b * -1;
				c = c * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>-${b}x-${c}`;
			}
			else if ((b == 0) && (c > 0)) {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>+${c}`;
			}
			else if ((b == 0) && (c < 0)) {
				c = c * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>-${c}`;
			}
			else if ((b > 0) && (c == 0)) {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>+${b}x`;
			}
			else if ((b < 0) && (c == 0)) {
				b = b * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>-${b}x`;
			}
			else {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}x<sup>2</sup>`;
			}
			break;
		case "makhpela":
			if ((b >= 0) && (c >= 0)) {
				insrep();
				document.getElementById('funcIns').innerText = `f(x)=${a}(x-${b})(x-${c})`;
			}
			else if ((b < 0) && (c >= 0)) {
				b = b * -1;
				insrep();
				document.getElementById('funcIns').innerText = `f(x)=${a}(x+${b})(x-${c})`;
			}
			else if ((b >= 0) && (c < 0)) {
				c = c * -1;
				insrep();
				document.getElementById('funcIns').innerText = `f(x)=${a}(x-${b})(x+${c})`;
			}
			else {
				b = b * -1;
				c = c * -1;
				insrep();
				document.getElementById('funcIns').innerText = `f(x)=${a}(x+${b})(x+${c})`;
			}
			break;
		case "kodkod":
			if ((b >= 0) && (c > 0)) {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}(x-${b})<sup>2</sup>+${c}`;
			}
			else if ((b >= 0) && (c < 0)) {
				c = c * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}(x-${b})<sup>2</sup>-${c}`;
			}
			else if ((b < 0) && (c > 0)) {
				b = b * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}(x+${b})<sup>2</sup>-${c}`;
			}
			else if ((b < 0) && (c < 0)) {
				c = c * -1;
				b = b * -1;
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}(x+${b})<sup>2</sup>-${c}`;
			}
			else if ((b >= 0) && (c == 0)) {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}(x-${b})<sup>2</sup>`;
			}
			else if ((b < 0) && (c == 0)) {
				insrep();
				document.getElementById('funcIns').innerHTML = `f(x)=${a}(x+${b})<sup>2</sup>`;
			}
			break;
	}
}

function setTextValues(symmetry, withY, withY, withY, zeroDot, direct, directType, upper, downer, posit, negat) {
	document.getElementById('sym').innerHTML = symmetry;
	document.getElementById('Khituh').innerHTML = withY;
	document.getElementById('zerro').innerHTML = zeroDot;
	document.getElementById('direc3x').innerHTML = direct;
	document.getElementById('dirType').innerHTML = directType;
	document.getElementById('vverkh').innerHTML = upper;
	document.getElementById('vniz').innerHTML = downer;
	document.getElementById('pluss').innerText = posit;
	document.getElementById('minuss').innerText = negat;
}