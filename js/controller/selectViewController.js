//ExampleViewController Object constructor
var SelectViewController = function (view, model) {
    
    var self = this;

    this.updateRouting = function () {
        console.log("Routing updated")
        $(".routing[id]").on("click", function () {
            var id = $(this).attr("id");
            console.log("selectView ID:" + id);

            if (id >= 0) {
                self.updateDishes(id);
                for (i = 0; i < dishes.length; i++) {
                    if (dishes[i].id == id) {
                        model.updateDetails(id);
                        break;
                    }
                }
            }

        });
    }

    //TODO: Get the dropdownmenu to change the type
    var dishes = 0;

    this.updateDishes = function (id) {
        // Return array of dishes depending on type of dish
        if (id < 100) {
            dishes = model.getAllDishes('starter');
        }
        else if (id >= 100 && id < 200) {
            dishes = model.getAllDishes('main dish');
        }
        else if (id >= 200) {
            dishes = model.getAllDishes('dessert');
        }
        else {
            dishes = 0;
        }
    }

    // Changes the type of dishes displayed
    view.starterSelect.click(function () {
        view.setType('starter');
        console.log("selectView starter clicked");
        model.notifyObservers("selectView dropDown");
        self.updateRouting();

    });
    view.mainDishSelect.click(function () {
        view.setType('main dish');
        console.log("selectView main dish clicked");
        model.notifyObservers("selectView dropDown");
        self.updateRouting();
    });
    view.dessertSelect.click(function () {
        view.setType('dessert');
        console.log("selectView dessert clicked");
        model.notifyObservers("selectView dropDown");
        self.updateRouting();
    });
    


}

