//ExampleView Object constructor
var IndexView = function (container, model) {

    // View 1/6
    // Implement in Screen for index (Home)


	// Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
	this.paragraph = container.find("#paragraph");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.createDinnerButton = container.find("#createDinner");

	console.log(this.plusButton);

	this.paragraph.html('<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><br /><h4>Start quickly!</h4>');
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	model.addObserver(this);

    // Update function. Called from the model.
	this.update = function (model, arg) {

	    if (arg == "setNumberOfGuests" || arg == "newMenu") {

	        // Update this view
	        this.numberOfGuests.html(model.getNumberOfGuests());

	    }
	}


}