// Created by Graeme Barbe
// Created on: May 9
// JS functions for index.html


// This function tells the user the cost of getting into the museum
'use strict';
function submit() {
	// Declares variables
	let select = document.getElementById('number')
	let numberOfCrêpes = select.options[select.selectedIndex].value
	let selectToppings = document.getElementById('topping')
	let numberOfToppings = selectToppings.options[select.selectedIndex].value

	// If statement to determine number of crêpes selected 
	if (numberOfCrêpes == "") {
		//Nothing was inputted 
		document.getElementById('total').innerHTML = "Please select a size"
	} else if (numberOfCrêpes == "one") {
		let numberPrice = 
	} else if (numberOfCrêpes == "two") {
		let numberPrice = 
	}
}