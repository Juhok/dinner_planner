//ExampleView Object constructor
var DetailsView = function (container, model) {
	var row = " <tr> <td>Olive Oil</td> </tr>";

	// Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)

    this.backToSelectDish = container.find("#backToSelectDish");
    this.ingTable = container.find("#ingTable");

  //  console.log (model.getAllIngredients());

    this.ingTable.html(row);


/*

<tr>

                          <td>"+unit+"</td>
                          <td>Olive Oil</td>
                          <td>SEK</td>
                          <td>0.20</td>
                      </tr>
"
  */  	
	
    // View 4/6
    // Implement in Screens for Details
	

}
 
