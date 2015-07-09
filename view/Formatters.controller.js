jQuery.sap.require("sap.training.util.Formatter");

sap.ui.controller("sap.training.view.Formatters", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.Formatters
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf sap.training.view.Formatters
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf sap.training.view.Formatters
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf sap.training.view.Formatters
	 */
	//	onExit: function() {
	//
	//	}

	salutation: function(sGender) {
		return sGender === "female" ? "Mrs." : "Mr.";
	},

	genderIcon: function(sGender) {
		return sGender === "female" ? "../img/Female-icon.png" : "../img/Male-icon.png";
	}
});