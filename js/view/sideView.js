//ExampleView Object constructor
var SideView = function (container, model) {
	
    // View 2/6
    // Implement in Screen for Select and Screen for Details

    this.totalCost = container.find("#totalCost");
    this.dishCell = container.find("#dishCell");
    this.ConfirmDinner = container.find("#confirmDinner");
 

    // Array that will hold container.find for all buttons created in the dishItem loop
    this.buttonArray = [];
    // Add this view as an observer to the array "observers" in the model
    model.addObserver(this);

    var jsMenu = model.getFullMenu();
    var htmlMenu = "";
    this.updateHtmlMenu = function (model) {
        htmlMenu = "";
        jsMenu = model.getFullMenu();
        
        // Get the name and cost of selected menu dishes
        for (var i = 0; i < jsMenu.length; i++) {
            htmlMenu += "<tr>" + "<td>" + model.getDish(jsMenu[i].id).name + "</td>"
            + "<td>" + model.getDishCost(jsMenu[i].id) + "</td>" 
            + "<td>" + "<input type='button' class='btn btn-danger btn-xs routing' value='X' id='" +jsMenu[i].id+1000+ "'></td>"
            + "</tr>";
            
            // Add a variable to a buttonArray
            this.buttonArray.push(jsMenu[i].id);
        }
        return htmlMenu;
    }
    

    // Set all variables in the buttonArray to corresponding ID in index.html
    for (i = 0; i < this.buttonArray.length; i++) {
        this.buttonArray[i] = container.find("#" + jsMenu[i].id);
        console.log(this.buttonArray[i]);
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
        else if (arg == "confirmDish") {
            // Update this view
            this.totalCost.html(model.getTotalMenuPrice());
            this.dishCell.html(this.updateHtmlMenu(model));
        }
        else if (arg == "removeDish") {
            // Update this view
            this.totalCost.html(model.getTotalMenuPrice());
            this.dishCell.html(this.updateHtmlMenu(model));
        }

    }
    
    // For controller
    this.getDishes = function () {
        return jsMenu;
    }
    this.getButtonArray = function () {
        return buttonArray;
    }



}








 
