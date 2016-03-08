//ExampleView Object constructor
var OverviewView = function (container, model) {
	
    // View 5/6 Screen for overview
	
    this.numberOfGuests = container.find("#numberOfGuests");
    this.menu = container.find("#menu");
    this.totalPrice = container.find("#totalPrice");
    this.BackToSelectDish = container.find("#backToSelectDish");
    this.PrintRecipeButton = container.find("#printRecipeButton");

    model.addObserver(this);

    this.updateHtmlMenu = function () {
        var htmlMenu = "";
        var jsMenu = model.getFullMenu();

        for (var i = 0; i < jsMenu.length; i++) {

            htmlMenu += "<div class='col-lg-2 col-sm-6 col-md-4'>"
            + "<div class='thumbnail'>"
            + "<a href='#' class='thumbnail'>"
            + "<img src=" + "images/" + model.getDish(jsMenu[i].id).image + " alt='Mountain View'>"
            + "</a>"
            + "<div class='caption'>"
            + "<h3>" + model.getDish(jsMenu[i].id).name + "</h3>"
            + "<p>" + model.getDish(jsMenu[i].id).description + "</p>"
            + "</div>"
            + "</div>"
            + "</div>";
        }
    }


    // Update function. Called from the model.
    this.update = function (model, arg) {

        if (arg == "setNumberOfGuests" || arg == "newMenu") {
            // Update this view
            this.numberOfGuests.html(model.getNumberOfGuests());
            this.menu.html(this.updateHtmlMenu());
            this.totalPrice.html(model.getTotalMenuPrice());
        }
        else if (arg == "overViewview") {
            // Update this view
            this.numberOfGuests.html(model.getNumberOfGuests());
            this.menu.html(this.updateHtmlMenu());
            this.totalPrice.html(model.getTotalMenuPrice());
        }
    }


}
 
