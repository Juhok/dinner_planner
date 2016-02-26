//ExampleView Object constructor
var DetailsView = function (container, model) {

    var row;

    model.addDishToMenu(1);
    model.setNumberOfGuests(4);


    var ingredients = model.getIngredient('starter');

    for (ingredient in ingredients) {
        row += "<tr>"
        row += "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['quantity'] + " " + ingredients[ingredient]['unit'] + "</td>"
        + "<td>" + ingredients[ingredient]['name'] + "</td>"
        + "<td>" + "SEK" + "</td>"
        + "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['price'] + "</td>";
        row += "</tr>"
    }

	// Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)

    this.backToSelectDish = container.find("#backToSelectDish");
    this.ingTable = container.find("#ingTable");
    this.totalCost = container.find("#total");
        
    this.totalCost.html(model.getDishCost(1));
    this.ingTable.html(row);
	
	
    // View 4/6
    // Implement in Screens for Details
	

}
 
