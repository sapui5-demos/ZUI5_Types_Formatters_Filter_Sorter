jQuery.sap.require("sap.training.type.ZipCode");

sap.ui.controller("sap.training.view.Datatypes", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.Main
	 */
	onInit: function() {

		var oCore = sap.ui.getCore();

		oCore.attachParseError(this.onError);

		oCore.attachValidationError(this.onError);

		oCore.attachValidationSuccess(function(oEvent) {
			var oElement = oEvent.getParameter("element");
			oElement.setValueState(sap.ui.core.ValueState.None);
		});
	},

	onError: function(oEvent) {
		var oElement = oEvent.getParameter("element");
		var oException = oEvent.getParameter("exception");

		oElement.setValueState(sap.ui.core.ValueState.Error);
		sap.m.MessageToast.show(
			oException.name + ": " + oException.message);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf sap.training.view.Main
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf sap.training.view.Main
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf sap.training.view.Main
	 */
	//	onExit: functon() {
	//
	//	}

	onInputError: function(oEvent) {

		oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);

		var oException = oEvent.getParameter("exception");
		var oTextView = this.getView().byId("myTextView");
		oTextView.setText(oException.message);

		oEvent.bCancelBubble = true;
	},

	onValidationSuccess: function(oEvent) {

		oEvent.oSource.setValueState(sap.ui.core.ValueState.None);

		var oTextView = this.getView().byId("myTextView");
		oTextView.setText("");
	},
});