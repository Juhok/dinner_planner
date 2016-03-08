var SideViewController = function(view, model) {

    var jsMenu = 0;
    var self = this;
    

    $(".routing[id]").on("click", function () {
        console.log("Heloooooooooooooo")
        self.updateRouting();
    });


    this.updateRouting = function () {
        //console.log($(".routing[id]"));
        $("#dishCell .routing[id]").on("click", function () {
            jsMenu = view.getDishes();
            var id = $(this).attr("id");
            console.log(id);

            if (id >= 0) {
                for (i = 0; i < jsMenu.length; i++) {
                    if (jsMenu[i].id == id) {
                        console.log("REMOVING DISH FROM MENU")
                        model.removeDishFromMenu(id);
                        break;
                    }
                }
            }

        });

    }


    view.plusButton.click(function(){
    model.setNumberOfGuests(1);
    });

    view.minusButton.click(function(){
    model.setNumberOfGuests(-1);
    });
    

    



}