//ExampleView Object constructor
var DetailsView = function (container, model) {

    var row;

    model.addDishToMenu(1);

    var ingredients = model.getIngredient('starter');

    for (ingredient in ingredients) {
        row += "<tr>"
        for (detail in ingredients[ingredient]) {
            row += "<td>" + ingredients[ingredient][detail]+ "</td>";
        }
        row += "</tr>"
    }

	// Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)

    this.backToSelectDish = container.find("#backToSelectDish");
    this.ingTable = container.find("#ingTable");

  //  console.log (model.getAllIngredients());

    this.ingTable.html(row);
	
	
    // View 4/6
    // Implement in Screens for Details
	

}
 
