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



// here are some code I tried to make the plus and minus buttons working, Juho
	
	this.update = function(model, arg) {
		
		if (arg == "newGuestsNumber"){
			this.numberOfGuests.html(model.getNumberOfGuests());
		}
		if (arg == "newMenu"){
			this.updateTable();
		}
	}

	//console.log("this.addObserver = sideMenuView");
	model.addObserver(this);

}	
	