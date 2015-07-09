jQuery.sap.declare("sap.training.util.Formatter");

sap.training.util.Formatter = {

	salutation: function(sGender) {
		return sGender === "female" ? "Mrs." : "Mr.";
	},

	genderIcon: function(sGender) {
		return sGender === "female" ? "../img/Female-icon.png" : "../img/Male-icon.png";
	}
};

