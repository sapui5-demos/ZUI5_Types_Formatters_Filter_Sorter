sap.ui.controller("sap.training.view.Sorter_and_Filters", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.Sorter_and_Filters
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf sap.training.view.Sorter_and_Filters
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf sap.training.view.Sorter_and_Filters
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf sap.training.view.Sorter_and_Filters
	 */
	//	onExit: function() {
	//
	//	}

	onChange: function(oEvent) {
		var sSalaryLevel = oEvent.oSource.getSelectedKey();
		var oFilter = new sap.ui.model.Filter(
                			"salaryLevel",
                			sap.ui.model.FilterOperator.EQ,
                			sSalaryLevel);

		var oTable = this.getView().byId("myTable");
		oTable.getBinding("rows").filter([oFilter]);
	},

	onRemoveFilter: function(oEvent) {
		var oTable = this.getView().byId("myTable");
		oTable.getBinding("rows").filter(null);

		var oComboBox = this.getView().byId("myComboBox");
		oComboBox.setValue("");
	},

	onSort: function(oEvent) {
		var oTable = this.getView().byId("myTable");

		var oSorter = new sap.ui.model.Sorter("salary", false);
		oTable.getBinding("rows").sort([oSorter]);
	},

	onRemoveSort: function(oEvent) {
		var oTable = this.getView().byId("myTable");
		oTable.getBinding("rows").sort(null);
	}
});