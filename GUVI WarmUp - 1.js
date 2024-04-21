/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(value) {
	if (value == parseInt(value)) {
		return -value;
	} else {
		return -1;
	}
}


/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/