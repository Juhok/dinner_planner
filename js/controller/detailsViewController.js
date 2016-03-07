//ExampleViewController Object constructor
var DetailsViewController = function (view, model) {

    view.confirmDishButton.click(function() {
            
        model.addDishToMenu(model.getDetailsDishID());
        console.log("Dish added to the menu.");
    });
}
 

