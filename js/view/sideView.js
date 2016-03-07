//ExampleView Object constructor
var SideView = function (container, model) {
	
    // View 2/6
    // Implement in Screen for Select and Screen for Details

    this.totalCost = container.find("#totalCost");
    this.dishCell = container.find("#dishCell");

    this.ConfirmDinner = container.find("#confirmDinner");
    model.addObserver(this);
    console.log("confirm dinner button");

    // Add this view as an observer to the array "observers" in the model
    model.addObserver(this);

    var htmlMenu = "";
    this.updateHtmlMenu = function (model) {
        var htmlMenu = "";
        var jsMenu = model.getFullMenu();
        

        // Get the name and cost of selected menu dishes
        for (var i = 0; i < jsMenu.length; i++) {
            htmlMenu += "<tr>" + "<td>" + model.getDish(jsMenu[i].id).name + "</td>"
            + "<td>" + model.getDishCost(jsMenu[i].id) + "</td>" 
            + "<td>" + '<input type="button" class="btn btn-danger btn-xs" value="X" />' + "</td>"
            + "</tr>";
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
            
        }
        else if (arg == "detailsDish") {
            // Update this view
            this.totalCost.html(model.getTotalMenuPrice());
            this.dishCell.html(this.updateHtmlMenu(model));
        }

    }
    



}








 
