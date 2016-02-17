//ExampleView Object constructor
var DetailsView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)

    this.backToSelectDish = container.find("#backToSelectDish");
    
    this.tableSpoon = container.find("#tableSpoons");

    model.addDishToMenu(1); //Frensh toast, starter
    model.addDishToMenu(201); //Vanilla ice-cream, dessert
    model.addDishToMenu(100); //Meat balls, main dish

    this.tableSpoon.html(model.getDish(201).)

	
	// TODO:
	
	// - Ingrediants for specific dish
	// - Preparation for specific dish
	// - Image for specific dish
	
	


}
 
