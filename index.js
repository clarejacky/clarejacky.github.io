function dayOfTheYear() {
	var dt = new Date();
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var monthNumber = dt.getMonth();
	var month = dayCount[monthNumber];
	var dayOfMonth = dt.getDate();
	var dayOfTheYear = month + dayOfMonth;
	return dayOfTheYear;
}

function dayOfBirthday () {
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var month = dayCount[6];
	var dayOfBirthday = month + 24;
	return dayOfBirthday;
}

var birthday = dayOfBirthday();
var dayYear = dayOfTheYear();

var daysUntilThirty = birthday - dayYear;
console.log(daysUntilThirty);

alert("Clare Jacky will be 30 in "+daysUntilThirty+ " days!");
