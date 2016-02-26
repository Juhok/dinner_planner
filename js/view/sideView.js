//ExampleView Object constructor
var SideView = function (container, model) {
	

    model.setNumberOfGuests(10);

    model.addDishToMenu(101);
    model.addDishToMenu(1);
    model.addDishToMenu(202);

    this.totalCost = container.find("#totalCost");
    this.dishCell = container.find("#dishCell");

    var htmlMenu = "";
    var jsMenu = model.getFullMenu();

    // Get the name and cost of selected menu dishes
    for (var i = 0; i < jsMenu.length; i++) {
        htmlMenu += "<tr>" + "<td>" + model.getDish(jsMenu[i].id).name + "</td>"
        + "<td>" + model.getDishCost(jsMenu[i].id) + "</td>" + "</tr>";
    }

    this.totalCost.html(model.getTotalMenuPrice());
    this.dishCell.html(htmlMenu);


    // View 2/6
    // Implement in Screen for Select and Screen for Details

}
 
