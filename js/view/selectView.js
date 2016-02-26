//ExampleView Object constructor
var SelectView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
    this.dishItem = container.find("#dishItem");
    var htmlDishes;

    var dishes = model.getAllDishesHello();


    for (i = 0; i < dishes.length; i++) {

        htmlDishes += "<div class= 'col-lg-2 col-sm-6 col-md-4>'"
        + "div class='thumbnail'>"
        + "<a href='#'" + "class='thumbnail'" + "onclick=" + "'window.location=" + "'details.html'" + ";'>"
        + "<img src=" + "images/" +dishes[i].image+ " alt=" + "'Mountain View'>"
        + "</a>"
        + "<div class='caption'>"
        + "<h3>" +dishes[i].name+ "</h3>"
        + "<p>" +dishes[i].description+ "</p>"
        + "</div>"
        + "</div>"
        + "</div>"
    }

    this.dishItem.html(htmlDishes);


    // View 3/6
    // Implement in Screen for select
	

}
 
