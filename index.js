function convert() {
	// Taking input values
	var number = document.getElementById("number").value;
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;

	// Convert the number from the input number system to decimal
	if (from == "bin") {
		var deci = parseInt(number, 2);
	} else if (from == "oct") {
		var deci = parseInt(number, 8);
  } else if (from == "hexa") {
		var deci = parseInt(number, 16);
  } else {
  var deci = Number(number);
}

// Convert the decimal number to the output number system
if (to == "bin") {
  var res = deci.toString(2);
} else if (to == "oct") {
  var res = deci.toString(8);
} else if (to == "hexa") {
  var res = deci.toString(16).toUpperCase();
} else {
  var res = deci.toString();
}

// Display the result
document.getElementById("result").innerHTML ="<h3>The result is :</h3>" + res;
}
