console.log('helloworld');
// Week 2 Conditions and Loops
// The "if" statement allows us to put a boolean expression inside of a pair parentheses, then we follow the parentheses by pair of curly braces any code we place in the curlies will be executed only if the value inside the parentheses evaluates to true.
// the "else" statement allows us to execute an action if one statement is false. the first statement won't execute but the second statement will execute. 
// we can use combinations of else, if statements to meet different conditions
// cost of milk is < $2 we will buy 2, else if the cost of milk is less than $3 we will only buy 1 gallon, if it is $3 or more we will not buy any
// with a single else statement at the end that defines the default code to execute if all the previous booleans expressions are false.
// Switch statements:  used to evalaute a variable and then provide multiple different code blocks that could be executed based on the value of the variable
// Example: stating a range of grades to determine an alphabetic grade
var grade = 'C'
switch (grade) {
    case 'A':
        console.log ('90-100');
        break;
    case 'B':
        console.log ('80-89');
// Nested "if" statements are okay when you have a diverging path based on the nested condition. if the first condition is true, you do somehting but what you dodependson if the second condiiton is true or not. 
// remember to always flatten nested "if" statements if there's nothing else inside the outer if stateements  

// when working with conditions look for key phrases such as "if" "conditional"
// you will be using comparison operators, your line will begin with "if" and depending on what is being asked of you then you will insert an "else" statement to meet the conditions of the request. {} this brackets stand for "if something occurs then we will do the following"
// within the brackets we will state what the conditons are and what actions we are taking aka "console.log"
// don't forget to use the semi-colons to end a line of code
// the only time we odn't have to put the conditions in the brackets is when something is inferred, if something is not greater than or equal to, then it can be inferred that it is less than the value asked for. 

// Boolean: data that can be true or false or (yes or no), the answer to any one of these questions is typically used to determine an action.
// Boolean operators- these are used to perform boolean logic. 
// When we combine boolean values and at least one boolean operator we get a boolean expression that will evaluate to another boolean expression either true or false. == expresses euqality 5 == 5
//	 5 > 4 greater than this is true
//	 4< 5 less than true
//	 5>4 && 4<10 this is true because both sides are true
//	 5>4 && 4>10  one of these is false so this whole statement is false
//	 4>10 || 1==1  this is saying if one or the other is true then the whole statement is true
// boolean values help us make decisions 
  
// when we need to meet two conditions, rather than having a lot of lines of code you can make it simpler. using the "(and) &&" operator can help such as the following: if(alarmSet == true && openDoor == true)
// you can shorten even further: if(alarmSet && openDoor)
// when you have an or statement use "||" and you will use two sets of parentheses to contain the two statements, use 3 sets of equals in this example because it's a string that will be used: if((username === Tommy123 && password === 12345) || (username === "Timmy 456" && pasword "6789"))
// Using switch statements & cases
// in certain instances, using switch statement and cases will be easier if certain data is know 
// in coding when you find yourself repeating informtaion there will be a more efficient way to set up the information
// look at the class grade and student class example in Openlabs

// Loops:
// intermediate loops- 
// for(let i = 10; i >= -10;)
// loops: allow us to repeat some code until a condition is met
// Different loops: 
// for loop- if you know how many times you need iterate or there's an array that we want to iterate over each element in it. 
//	you begin with "for", then (), 1.variable initialization, 2.the condition that has to be met and 3.then what's going to happen post iteration
// while loop- is alot like for loop with more flexibility or if you don't know the number of iterations needed
// the only piece of a while loop is the condition that goes in the parentheses
// a do while- is a wild lopp that will iterate at least once and we check the condition at the end, if you have soemthing that has to happen at least once and then continue to happen
// for in loop- loops through the index
// for of loop-  loops through the object itself
}