//ExampleView Object constructor
var SelectView = function (container, model) {

    // View 3/6
    // Implement in Screen for select

    this.dishItem = container.find("#dishItem");
    this.dropdownMenu1 = container.find("#dropdownMenu1");

    var htmlDishes;
    var type = 'main dish'; // Start type
    var dishes = model.getAllDishes(type);


    // Array that will hold container.find for all buttons created in the dishItem loop
    this.buttonArray = [];

    model.addObserver(this);

    // Generate html code that will be displayed id dishItem in index.html
    for (i = 0; i < dishes.length; i++) {

        //TODO: Create button to that does 1) update overallstatecontroller to show detailsview 2) update details id.
        htmlDishes += "<div class='col-lg-2 col-sm-6 col-md-4>'"
        + "<div class='thumbnail'>"
        + "<button type='button' button class='btn btn-default routing' data-state='detailsSide' id='" + dishes[i].id + "'>"
        + "<img src='images/"+dishes[i].image+"'/>"
        + "</button>"
        + "<div class='caption'>"
        + "<h3>" +dishes[i].name+ "</h3>"
        + "<p>" +dishes[i].description+ "</p>"
        + "</div>"
        + "</div>"

        // Add a variable to a buttonArray
        this.buttonArray.push(dishes[i].id);
    }

    // Add the possible dishes to index.html
    this.dishItem.html(htmlDishes);

    // Set all variables in the buttonArray to corresponding ID in index.html
    for (i = 0; i < this.buttonArray.length; i++) {
        this.buttonArray[i] = container.find("#"+dishes[i].id);
        
    }


    // Update function. Called from the model.
    this.update = function (model, arg) {

        if (arg == "setNumberOfGuests" || arg == "newMenu") {

            // Update this view

        }
    }


    // For controller
    this.getDishes = function () {
        return dishes;
    }
    this.getButtonArray = function () {
        return buttonArray;
    }

}
 