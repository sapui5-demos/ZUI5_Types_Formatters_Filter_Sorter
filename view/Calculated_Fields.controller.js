jQuery.sap.require("sap.training.util.Formatter");

sap.ui.controller("sap.training.view.Calculated_Fields", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.Calculated_Fields
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf sap.training.view.Calculated_Fields
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf sap.training.view.Calculated_Fields
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf sap.training.view.Calculated_Fields
	 */
	//	onExit: function() {
	//
	//	}

	greeting: function(sGender, sFirstName, sLastName) {
		var sSalutation = (sGender === "female") ? "Mrs." : "Mr.";
		return "Hello " + sSalutation + " " + sFirstName + " " + sLastName;
	},

	age: function(sBirthday) {
		var today = new Date();
		var birthDate = new Date(sBirthday);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

});