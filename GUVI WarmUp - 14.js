/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	if (firstName && lastName)
		return (firstName + ' ' + lastName)
	else if (firstName && !lastName) {
		return firstName
	} else if (!firstName && lastName)
		return lastName
	else
		return ''
	
	
	
	///Your code Ends here
}

/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/