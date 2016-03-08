//ExampleView Object constructor
var SelectView = function (container, model) {

    // View 3/6
    // Implement in Screen for select

    this.dishItem = container.find("#dishItem");
    
    console.log("dishItem" +dishItem);

    var dishItemString = container.find('#dishItem').tostring;

    this.starterSelect = container.find("#starterSelect");
    this.mainDishSelect = container.find("#mainDishSelect");
    this.dessertSelect = container.find("#dessertSelect");

    this.getDishItem = function () {
        return this.dishItem;
    }

    this.setType = function (newType) {
        type = newType;
    };

    var htmlDishes;
    var type = 'main dish'; // Start type
    var dishes;

    model.addObserver(this);

    //this.createDishSelection(model);

    this.createDishSelection = function (model) {
        htmlDishes = "";
        dishes = model.getAllDishes(type);
        // Generate html code that will be displayed id dishItem in index.html
        for (i = 0; i < dishes.length; i++) {

            //TODO: Create button to that does 1) update overallstatecontroller to show detailsview 2) update details id.
            htmlDishes += "<div class='col-lg-2 col-sm-6 col-md-4>'"
            + "<div class='thumbnail'>"
            + "<button type='button' button class='btn btn-default routing' data-state='detailsSide' input id='" + dishes[i].id + "'>"
            + "<img src='images/" + dishes[i].image + "'/>"
            + "</button>"
            + "<div class='caption'>"
            + "<h3>" + dishes[i].name + "</h3>"
            + "<p>" + dishes[i].description + "</p>"
            + "</div>"
            + "</div>"
            
        }
        return htmlDishes;

    }

    this.createDishSelection(model);
    
    // Update function. Called from the model.
    this.update = function (model, arg) {
        if (arg == "selectView dropDown") {
            console.log("In selectView update function");
            this.dishItem.html(this.createDishSelection(model));
        }
    }


    // For controller
    this.getDishes = function () {
        return dishes;
    }
    

}
 