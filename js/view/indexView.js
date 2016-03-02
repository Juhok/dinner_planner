//ExampleView Object constructor
var IndexView = function (container, model) {


	this.container = container;

	container.html('<h2>A Home Dinner Service</h2>');

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");


	this.createDinnerButton = container.find("#createDinner");
	console.log("button found");



	
	model.setNumberOfGuests(10);

	this.numberOfGuests.html(model.getNumberOfGuests());

    // View 1/6
    // Implement in Screen for index (Home)



}
 
