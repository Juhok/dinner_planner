//ExampleViewController Object constructor
var IndexViewController = function(view, model ) {
 
//  view.plusButton.click(function(){
//  model.setNumberOfGuests(model.getNumberOfGuests() + 1);
//  });
 
//  view.minusButton.click(function(){
//  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
//  });
// }


// createDinnerButton.onclick = function(){

// 	overallStateController.indexView.container.hide();
// 		console.log("onclick");



// }





view.plusButton.click(function(){
		model.setNumberOfGuests(1);

		console.log("here");


	});


	 
	view.minusButton.click(function(){
		model.setNumberOfGuests(-1);
	});
}

