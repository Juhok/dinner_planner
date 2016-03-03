var overallStateController = function(model) {

	this.indexView = new IndexView ($("#indexView"), model);
	this.indexCtrl = new IndexCtrl(this.indexView, model);

	this.indexView.container.hide();
	
	// this.sideMenuView.container.hide();
	// this.mainView.container.hide();
	// this.selectedDishView.container.hide();
	// this.overView.container.hide();
	// this.instructionView.container.hide();

}