// If statement for how you want your eggs cooked
	if (typeOfEggs == "") {
		document.getElementById('total').innerHTML = "Please select how you would like your eggs cooked."
	} else if (typeOfEggs == "sunnySideUp") {
		eggType = SUNNY_SIDE_UP
	} else if (typeOfEggs == "overEasy") {
		eggType = OVER_EASY
	} else if (typeOfEggs == "Scrambled") {
		eggType = SCRAMBLED
	} else {
		eggType = OMELETTE
	}

	// If statement for number of eggs
	if (numberOfEggs == "") {
		document.getElementById('total').innerHTML = "Please select how many eggs you would like."
	} else if (numberOfEggs == "two") {
		numEggs = TWO_EGGS
	} else if (numberOfEggs == "three") {
		numEggs = THREE_EGGS
	} else if (numberOfEggs == "four") {
		numEggs = FOUR_EGGS
	} else {
		numEggs = FIVE_EGGS
	}

	//If statement for price of drink
	if (drink == "No") {
		drinkPrice = NO_DRINK
	} else if (drink == "Milkshake") {
		drinkPrice = MILKSHAKE
	} else if (drink == "Coffee") {
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
}

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
		if (drink == "No") {
		drinkPrice = NO_DRINK
	} else if (drink == "Milkshake") {
		drinkPrice = MILKSHAKE
	} else if (drink == "Coffee") {
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
		
	} else {
		document.getElementById('total').innerHTML = "Please select how many eggs you would like."
	}
} else {
	document.getElementById('total').innerHTML = "Please select how you would like your eggs cooked."
}