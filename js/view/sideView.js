//ExampleView Object constructor
var SideView = function (container, model) {
	

    this.dishCost = container.find("#dishCost");
    this.totalCost = container.find("#totalCost");

    model.setNumberOfGuests(4);

    model.addDishToMenu(101);
    model.addDishToMenu(1);
    model.addDishToMenu(2);

    this.dishCost.html(model.getDishCost(101));
    this.totalCost.html(model.getTotalMenuPrice());

    // View 2/6
    // Implement in Screen for Select and Screen for Details

}
 
