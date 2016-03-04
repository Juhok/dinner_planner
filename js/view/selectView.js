//ExampleView Object constructor
var SelectView = function (container, model) {

    // View 3/6
    // Implement in Screen for select

    this.dishItem = container.find("#dishItem");
    var htmlDishes;

    var type = 'main dish';
    var dishes = model.getAllDishes('main dish');


    for (i = 0; i < dishes.length; i++) {

        htmlDishes += "<div class='col-lg-2 col-sm-6 col-md-4>'"
        + "<div class='thumbnail'>"
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


    
	

}
 