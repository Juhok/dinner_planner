//InstructionsView Object constructor
var InstructionsView = function (container, model) {

    // View 6/6
    // Implement in Screen for instructions

    model.addObserver(this);

    var htmlMenu;
    var jsMenu = model.getFullMenu();

    this.BackToOverView = container.find("#backToOverView");
    this.instructions = container.find('#instructions');

 	this.updateInstructions = function(model){

 	    htmlMenu = "";
 	    jsMenu = model.getFullMenu();

 	    // Generate html code that will be displayed id dishItem in index.html
 	    for (i = 0; i < jsMenu.length; i++) {

 	        if (jsMenu[i].id != 0) {
 	            console.log(jsMenu[i].id);
 	            htmlMenu += "<div class='col-lg-2 col-sm-6 col-md-4>'"
                       + "<div class='thumbnail'>"
                       + "<a href='#' class='thumbnail'>"
                       + "<img src='images/" + model.getDish(jsMenu[i].id).image + "'/>"
                       + "</a>"
                       + "<div class='caption'>"
                       + "<h3>" + model.getDish(jsMenu[i].id).name + "</h3>"
                       + "<p>" + model.getDish(jsMenu[i].id).description + "</p>"
                       + "</div>"
                       + "</div>"
                       + "</div>"
 	        }
 	        else {

 	            htmlMenu += "<div class='caption'>" + "<h3>" + "No" + model.getDish(jsMenu[i].id).type + "</h3>"
                + "</div>"

 	        }
 	    }
 	    return htmlMenu;

 	}

    // Update function. Called from the model.
 	this.update = function (model, arg) {
 	    this.instructions.html(this.updateInstructions(model));
 	}
		
    
	

}
 
