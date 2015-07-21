/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */
   function multiplyTwo(num1, num2) {
   	return num1 * num2;
  }

/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */
   function divideTwo(num1, num2) {
   	 return num1 / num2;
  }

/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */
   var returnVal = function(num1, num2, mathFunc) {
    return mathFunc(num1, num2);
  }


/*
  Log the result
 */
var product = returnVal(2, 3, multiplyTwo);
  document.write("<p>" + "The product is " + product + "</p>");

var quotient = returnVal(10, 5, divideTwo);
  document.write("<p>" + "The quotient is " + quotient + "</p>");  


