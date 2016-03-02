//ExampleView Object constructor
var ExampleView = function (container, model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");	
	this.minusButton = container.find("#minusGuest");


	// create dinner button integration



	this.numberOfGuests.html(model.getNumberOfGuests());


    // View 1/6
    // Implement in Screen for index (Home)



// here are some code I tried to make the plus and minus buttons working
	
	this.update = function(model, arg) {

		console.log("UPDATE sideMenuView // arg = "+arg);
		
		if (arg == "newGuestsNumber"){
			this.numberOfGuests.html(model.getNumberOfGuests());

			console.log("new guest");


		}
		if (arg == "newMenu"){
			this.updateTable();
		}
	}

	//console.log("this.addObserver = sideMenuView");
	model.addObserver(this);

}	
	