function dayOfTheYear() {
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var monthNumber = this.getMonth();
	var month = dayCount[monthNumber];
	var dayOfMonth = this.getDate();
	var dayOfTheYear = month + dayOfMonth;
	return dayOfTheYear;
}
function dayOfBirthday () {
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var month = dayCount[6];
	var dayOfBirthday = month + 24;
	return dayOfBirthday;
}
function daysUntilThirty (dayOfTheYear, dayOfBirthday) {
	var daysUntilThirty = dayOfBirthday - dayOfTheYear;
	return daysUntilThirty;
	alert("You will be 30 in "+daysUntilThirty+" days!");
	console.log(daysUntilThirty);
}
