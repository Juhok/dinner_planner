var OverallStateController = function (model) {

    // Start in indexView
    $("#indexView").show();
    $("#sideView").hide();
    $("#selectView").hide();
    $("#detailsView").hide();
    $("#overviewView").hide();
    $("#instructionsView").hide();

    this.showState = function (state) {

        if (state == "selectSide") {

            // Show sideview and selectView
            $("#indexView").hide();
            $("#sideView").show();
            $("#selectView").show();
            $("#detailsView").hide();
            $("#overviewView").hide();
            $("#instructionsView").hide();

        }
        else if (state == "detailsSide") {
            // Show sideview and detailsView
            

            $("#indexView").hide();
            $("#sideView").show();
            $("#selectView").hide();
            $("#detailsView").show();
            $("#overviewView").hide();
            $("#instructionsView").hide();
        }
        else if (state == "overview") {
            // Show overview
            // Hide the other
            $("#indexView").hide();
            $("#sideView").hide();
            $("#selectView").hide();
            $("#detailsView").hide();
            $("#overviewView").show();
            $("#instructionsView").hide();

        }
        else if (state == "instructions") {
            // Show instructions
            // Hide the other
            $("#indexView").hide();
            $("#sideView").hide();
            $("#selectView").hide();
            $("#detailsView").hide();
            $("#overviewView").hide();
            $("#instructionsView").show();
        }
        else if (state == "home") {
            // show indexView
            // Hide the other
            $("#indexView").show();
            $("#sideView").hide();
            $("#selectView").hide();
            $("#detailsView").hide();
            $("#overviewView").hide();
            $("#instructionsView").hide();
        }

    }

    var self = this;
    $(".routing[data-state]").on("click", function () {
        var state = $(this).attr("data-state");

        self.showState(state);
    });
    //<button class="routing" data-state="home">Go to home</button>

}

    