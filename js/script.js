// Created by Graeme Barbe
// Created on: May 9
// JS functions for index.html


// This function tells the user the cost of getting into the museum
'use strict';
function submit() {
	// Constants
	const HST = 0.13
	const TOPPING_COST = 2.99
	const SUNNY_SIDE_UP = 3.00
	const OVER_EASY = 3.00
	const SCRAMBLED = 3.99
	const OMELETTE = 4.50
	const TWO_EGGS = 3.00
	const THREE_EGGS = 4.50
	const FOUR_EGGS = 6.00
	const FIVE_EGGS = 7.50
	const NO_DRINK = 0
	const MILKSHAKE = 6.99
	const COFFEE = 2.50
	const TEA = 2.50

	// Type of eggs
	let selectTypeOfEggs = document.getElementById('eggs')
	let typeOfEggs = selectTypeOfEggs.options[selectTypeOfEggs.selectedIndex].value

	// Number of eggs
	let selectNumEggs = document.getElementById('numberOfEggs')
	let numberOfEggs = selectNumEggs.options[selectNumEggs.selectedIndex].value

	// Toppings Cost
	let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  	let numToppings = checkboxes.length;
  	let costToppings = numToppings * TOPPING_COST;

	// Drink cost
	let drink = document.querySelectorAll('input[name="drink"]:checked').value;

	// If statement for type of eggs
	if (typeOfEggs == "") {
		document.getElementById('total').innerHTML = "Please select how you would like your eggs cooked."
	} else if (typeOfEggs == "sunnySideUp") {
		let eggType = SUNNY_SIDE_UP
	} else if (typeOfEggs == "overEasy") {
		let eggType = OVER_EASY
	} else if (typeOfEggs == "Scrambled") {
		let eggType = SCRAMBLED
	} else {
		let eggType = OMELETTE
	}

	// If statement for number of eggs
	if (numberOfEggs == "") {
		document.getElementById('total').innerHTML = "Please select how many eggs you would like."
	} else if (numberOfEggs == "two") {
		let numEggs = TWO_EGGS
	} else if (numberOfEggs == "three") {
		let numEggs = THREE_EHHS
	} else if (numberOfEggs == "four") {
		let numEggs = FOUR_EGGS
	} else {
		let numEggs = FIVE_EGGS
	}
}
