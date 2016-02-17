//ExampleView Object constructor
var SideView = function (container, model) {
	

    this.dishCost = container.find("#dishCost");
    this.totalCost = container.find("#totalCost");


    model.addDishToMenu(101);

    model.setNumberOfGuests(2);

    this.dishCost.html(model.getNumberOfGuests());

    this.totalCost.html(model.testFunction());

    

	
    // View 2/6
    // Implement in Screen for Select and Screen for Details

}
 
