//ExampleView Object constructor
var SideView = function (container, model) {
	
    // View 2/6
    // Implement in Screen for Select and Screen for Details

    //Mock values
    //model.setNumberOfGuests(2);
    //model.addDishToMenu(101);
    //model.addDishToMenu(1);
    //model.addDishToMenu(202);

    this.totalCost = container.find("#totalCost");
    this.dishCell = container.find("#dishCell");

    // Add this view as an observer to the array "observers" in the model
    model.addObserver(this);

    var htmlMenu = "";

    


    this.updateHtmlMenu = function (model) {
        var htmlMenu = "";
        var jsMenu = model.getFullMenu();
        console.log(jsMenu);

        // Get the name and cost of selected menu dishes
        for (var i = 0; i < jsMenu.length; i++) {
            htmlMenu += "<tr>" + "<td>" + model.getDish(jsMenu[i].id).name + "</td>"
            + "<td>" + model.getDishCost(jsMenu[i].id) + "</td>" + "</tr>";
        }
        return htmlMenu;
    }


    // Sets the initial values
    this.totalCost.html(model.getTotalMenuPrice());
    this.dishCell.html(htmlMenu);


    // Update function. Called from the model.
    this.update = function (model, arg) {

        if (arg == "setNumberOfGuests" || arg == "newMenu") {

            // Update this view
            this.totalCost.html(model.getTotalMenuPrice());
            this.dishCell.html(this.updateHtmlMenu(model));

            // Print argument and view
            console.log(arg + this.toString);
        }
    }
    



}
 
