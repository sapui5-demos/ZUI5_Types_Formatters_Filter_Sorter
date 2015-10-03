jQuery.sap.require("sap.training.type.ZipCode");

sap.ui.controller("sap.training.view.Datatypes", {

	onInit: function() {

		// var oCore = sap.ui.getCore();

		// oCore.attachParseError(this.onError);

		// oCore.attachValidationError(this.onError);

		// oCore.attachValidationSuccess(function(oEvent) {
		// 	var oElement = oEvent.getParameter("element");
		// 	oElement.setValueState(sap.ui.core.ValueState.None);
		// });
	},

	onError: function(oEvent) {
		var oElement = oEvent.getParameter("element");
		var oException = oEvent.getParameter("exception");

		oElement.setValueState(sap.ui.core.ValueState.Error);
		sap.m.MessageToast.show(
			oException.name + ": " + oException.message);
	},

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
	}
});