/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

function divisibleByFive(num1) {
	///Your code Starts here 
	let div = num1 % 5;
	if (div == 0) {
		return true;
	}
	return false;
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

divisibleByFive(5);
divisibleByFive(-55);
divisibleByFive(37);
*/