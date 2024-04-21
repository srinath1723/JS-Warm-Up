/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	let dis1 = x2 - x1
	let dis2 = y2 - y1
	
	let p1 = dis1 * dis1
	let p2 = dis2 * dis2
	
	let ans = Math.sqrt(p1 + p2)
	return parseInt(ans)
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/