function dayOfBirthday () {
	var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var month = dayCount[6];
	var dayOfBirthday = month + 24;
	return dayOfBirthday;
}

console.log(dayOfBirthday);
