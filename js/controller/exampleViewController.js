//ExampleViewController Object constructor
var ExampleViewController = function(view, model ) {
 

view.plusButton.click(function(){
		model.setNumberOfGuests(1);

		console.log("here");


	});


	 
	view.minusButton.click(function(){
		model.setNumberOfGuests(-1);
	});
}

