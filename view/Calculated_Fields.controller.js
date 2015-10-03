jQuery.sap.require("sap.training.util.Formatter");

sap.ui.controller("sap.training.view.Calculated_Fields", {

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