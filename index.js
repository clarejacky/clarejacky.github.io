function dayOfTheYear() {
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var monthNumber = this.getMonth();
	var month = dayCount[monthNumber];
	var dayOfMonth = this.getDate();
	var dayOfTheYear = month + dayOfMonth;
	return;
}
function dayOfBirthday () {
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var month = dayCount[6];
	var dayOfBirthday = month + 24;
	return;
}
function daysUntilThirty (dayYear, birthday) {
	var birthday = dayOfBirthday();
	var dayYear = dayOfTheYear();
	var daysUntilThirty = birthday - dayYear;
	return;
}
console.log("You will be 30 in "+daysUntilThirty()+" days!");
