//ExampleView Object constructor
var sideMenuView = function (container, model) {


	this.container = container;

	console.log(hello);
	
	container.html('<h3>hello</h3>');
      

	// string += "<div id="sideView">"
	// +"<h3>hello</h3>";
	// "<table class="table">"+
	// "<thead>"+
	// "<tr>"+
	// "<td><h4>Dish Name</h4></td>"+
	// "<td><h4>Cost</h4></td>"+
	// "</tr>"+
	// "</thead>"+
	// "</table>"+
	// " <table class="table" id="dishCell">"+
	// "</table>"+
	// "<hr>"+
	// "<div>"+
	// "<ul class="list-inline">"+
	// "<li class="pull-right"><p>SEK</p></li>"+
	// "<li class="pull-right"><p> <span id="totalCost"></span></p></li>"+
	// "</ul>"+
	// "</div>"+
	// "</div>";  

	


	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	model.setNumberOfGuests(10);

	this.numberOfGuests.html(model.getNumberOfGuests());

    // View 1/6
    // Implement in Screen for index (Home)

	model.addObserver(this);

}
 
