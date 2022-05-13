// Created by Graeme Barbe
// Created on: May 9
// JS functions for index.html


// This function tells the user the cost of their order
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

	//Initializes variables
	let eggType;
	let numEggs;
	let drinkPrice;
	
	// How you want your eggs cooked
	let selectTypeOfEggs = document.getElementById('eggs')
	let typeOfEggs = selectTypeOfEggs.options[selectTypeOfEggs.selectedIndex].value

	// Number of eggs
	let selectNumEggs = document.getElementById('numberOfEggs')
	let numberOfEggs = selectNumEggs.options[selectNumEggs.selectedIndex].value

	// Toppings Cost
	let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
  	let numToppings = checkboxes.length
  	let costToppings = numToppings * TOPPING_COST

	// Drink cost
	let drink = document.querySelector("input[type='radio'][name=drink]:checked").value;

	if (typeOfEggs != "") {
		if (numberOfEggs != "") {
			// If statement for how you want your eggs cooked
			if (typeOfEggs == "sunnySideUp") {
				eggType = SUNNY_SIDE_UP
			} else if (typeOfEggs == "overEasy") {
				eggType = OVER_EASY
			} else if (typeOfEggs == "Scrambled") {
				eggType = SCRAMBLED
			} else {
				eggType = OMELETTE
			}
	
			//If statement for number of eggs
			if (numberOfEggs == "two") {
				numEggs = TWO_EGGS
			} else if (numberOfEggs == "three") {
				numEggs = THREE_EGGS
			} else if (numberOfEggs == "four") {
				numEggs = FOUR_EGGS
			} else {
				numEggs = FIVE_EGGS
			}
	
			//If statement for drink
			if (drink == "no") {
				drinkPrice = NO_DRINK
			} else if (drink == "milkshake") {
				drinkPrice = MILKSHAKE
			} else if (drink == "coffee") {
				drinkPrice = COFFEE
			} else {
				drinkPrice = TEA
			}
	
			//Calculations
			let subtotal = eggType + numEggs + costToppings + drinkPrice
			let tax = subtotal * HST
			let total = subtotal + tax
		
			//Displays subtotal, tax, total
			document.getElementById('subtotal').innerHTML = "Your subtotal is $" + subtotal.toFixed(2)
			document.getElementById('tax').innerHTML = "Your tax is $" + tax.toFixed(2)
			document.getElementById('total').innerHTML = "Your total is $" + total.toFixed(2)
			document.getElementById('total').innerHTML = " " + drink
		
		} else {
			document.getElementById('total').innerHTML = "Please select how many eggs you would like."
		}
	} else {
	document.getElementById('total').innerHTML = "Please select how you would like your eggs cooked."
	}
}