var overallStateController = function(model) {

    $(".routing[data-state]").on("click", function () {
        var state = $(this).attr("data-state");

        this.showState(state);
    });
    //<button class="routing" data-state="home">Go to home</button>

    this.showState = function (state) {

        if (state = "selectSide") {

        }

    }
}