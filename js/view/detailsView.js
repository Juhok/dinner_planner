//ExampleView Object constructor
var DetailsView = function (container, model) {

    // View 4/6 Screen for Details

    // Html elements in index.html
    this.backToSelectDish = container.find("#backToSelectDish"); //Button
    this.ingTable = container.find("#ingTable"); //Table with ingredients
    this.totalCost = container.find("#total"); // Number
    this.numberOfGuests = container.find('#numberOfGuests'); // Number
    this.dishImage = container.find('#drag2'); // Image
    this.confirmDishButton = container.find('#confirmDish'); //Button

    console.log(this.confirmDishButton);

    // Adding detailsView as observer
    model.addObserver(this);

    // Update table with ingredients depending on dish
    this.updateIngTable = function (model) {
        console.log("updateIngtable detailsView")
        var ingredients = model.getIngredient();
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

    // Update function called from the model (for all observers).
    this.update = function (model, arg) {
        // Update this view

        //Update anything related to number of guests
        if (arg == "setNumberOfGuests") {
            this.numberOfGuests.html("Ingredients for "+model.getNumberOfGuests()+" people");
            this.ingTable.html(this.updateIngTable(model));
            this.totalCost.html(model.getDishCost(model.getDetailsDishID()));
        }

        // Update  anthing related to specific dish
        else if (arg == "detailsDish") {
            document.getElementById("drag2").src = "images/" + model.getImage(model.getDish(model.getDetailsDishID()));

            this.numberOfGuests.html("Ingredients for " + model.getNumberOfGuests() + " people");
            this.ingTable.html(this.updateIngTable(model));
            this.totalCost.html(model.getDishCost(model.getDetailsDishID()));
        }

    }

}