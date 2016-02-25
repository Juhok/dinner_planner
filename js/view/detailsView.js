//ExampleView Object constructor
var DetailsView = function (container, model) {
	var row =  "<tr> <td>750 g</td> <td>Chicken Breast</td> <td>SEK</td> <td>10.00</td> </tr> <tr> <td>100 ml</td> <td>Tomato Sauce</td> <td>SEK</td> <td>5.00</td> </tr> <tr> <td>250 g</td> <td>Mozzarella Cheese</td> <td>SEK</td> <td>15.00</td> </tr> <tr> <td>300 g</td> <td>Lasagne Shells</td> <td>SEK</td> <td>20.00</td> </tr>";

	

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
 
