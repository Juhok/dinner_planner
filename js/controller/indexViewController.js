//ExampleViewController Object constructor
var IndexViewController = function(view, model ) {
 

view.plusButton.click(function(){
    model.setNumberOfGuests(1);
    console.log(model.getNumberOfGuests());

	});


view.minusButton.click(function(){
	    model.setNumberOfGuests(-1);
	    console.log(model.getNumberOfGuests());
	});
}

