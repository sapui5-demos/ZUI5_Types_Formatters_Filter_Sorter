jQuery.sap.require("sap.training.util.Formatter");

sap.ui.controller("sap.training.view.Formatters", {

	salutation: function(sGender) {
		return sGender === "female" ? "Mrs." : "Mr.";
	},

	genderIcon: function(sGender) {
		return sGender === "female" ? "../img/Female-icon.png" : "../img/Male-icon.png";
	}
});