$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
    //And create the needed controllers and views
	
	var exampleView = new ExampleView($("#exampleView"), model); // View 1, index screen

	var sideView = new SideView($("sideView"), model); // View 2, Select and details screen

	var selectView = new SelectView($("selectView"), model); // View 3, Select screen

	var detailsView = new DetailsView($("#detailsView"), model); // View 4, Details screen

	var overviewView = new OverviewView($("overviewView"), model); // View 5, Overview screen

	var intructionsView = new InstructionsView($("instructionsView"), model); // View 6, Instructions screen




});