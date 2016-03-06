//ExampleView Object constructor
var DetailsView = function (container, model) {

    // View 4/6
    // Implement in Screens for Details

    // Html elements in index.html
    this.backToSelectDish = container.find("#backToSelectDish"); //Button
    this.ingTable = container.find("#ingTable"); //Table with ingredients
    this.totalCost = container.find("#total"); // Number


    //Mock Values
    model.addDishToMenu(1);
    model.setNumberOfGuests(4);


    var ingredients = model.getIngredient('starter');
    var row;
    for (ingredient in ingredients) {
        row += "<tr>"
        row += "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['quantity'] + " " + ingredients[ingredient]['unit'] + "</td>"
        + "<td>" + ingredients[ingredient]['name'] + "</td>"
        + "<td>" + "SEK" + "</td>"
        + "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['price'] + "</td>";
        row += "</tr>"
    }



    this.totalCost.html(model.getDishCost(1));
    this.ingTable.html(row);

    this.updateIngTable = function (model) {

        var ingredients = model.getIngredient('starter'); //Gets an object from 
        var row;
        for (ingredient in ingredients) {
            row += "<tr>"
            row += "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['quantity'] + " " + ingredients[ingredient]['unit'] + "</td>"
            + "<td>" + ingredients[ingredient]['name'] + "</td>"
            + "<td>" + "SEK" + "</td>"
            + "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['price'] + "</td>";
            row += "</tr>"
        }


        return row;

    }



    // Update function. Called from the model.
    this.update = function (model, arg) {

        if (arg == "setNumberOfGuests" || arg == "newMenu") {

            // Update this view
            this.ingTable.html(this.updateIngTable(model));
            this.totalCost.html(model.getTotalMenuPrice());

        }
    }

}