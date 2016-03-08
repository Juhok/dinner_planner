var SideViewController = function(view, model) {


    view.plusButton.click(function(){
    model.setNumberOfGuests(1);
    });


    view.minusButton.click(function(){
    model.setNumberOfGuests(-1);
    });
    

    var jsMenu = 0;
    var self = this;
    $(".routing[id]").on("click", function () {
        jsMenu = view.getDishes();
        var id = $(this).attr("id");

        if (id >= 0) {
            for (i = 0; i < jsMenu.length; i++) {
                if (jsMenu[i].id == id) {
                    model.removeDishFromMenu(id);
                    break;
                }
            }
        }

    });



}