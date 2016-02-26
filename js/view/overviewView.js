//ExampleView Object constructor
var OverviewView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
    this.numberOfGuests = container.find("#numberOfGuests");
    this.menu = container.find("#menu");
    this.totalPrice = container.find("#totalPrice");

    model.setNumberOfGuests(4);

    model.addDishToMenu(1);
    model.addDishToMenu(101);
    model.addDishToMenu(202);

    var htmlMenu = "";
    var jsMenu = model.getFullMenu();

    for (var i = 0; i < jsMenu.length; i++){

        htmlMenu += "<div class='col-lg-2 col-sm-6 col-md-4'>"
        + "<div class='thumbnail'>"
        + "<a href='#' class='thumbnail'>"
        + "<img src=" + "images/" + model.getDish(jsMenu[i].id).image + " alt='Mountain View'>"
        + "</a>"
        + "<div class='caption'>"
        + "<h3>" +model.getDish(jsMenu[i].id).name+ "</h3>"
        + "<p>" +model.getDish(jsMenu[i].id).description+ "</p>"
        + "</div>"
        + "</div>"
        + "</div>";
        console.log("Hello");
    }


    

    this.numberOfGuests.html(model.getNumberOfGuests);
    this.menu.html(htmlMenu);
    this.totalPrice.html(model.getTotalMenuPrice());

    // View 5/6
    // Implement in Screen for overview
	

}
 
