var firstNumber = 0;
var secondNumber = 1;
var fibonacci = []
var thirdNumber;
fibonacci [firstNumber] = 0;
fibonacci [secondNumber] = 1;
for (thirdNumber=2; thirdNumber<=10; thirdNumber++){

fibonacci[thirdNumber] = fibonacci[thirdNumber-2] + fibonacci[thirdNumber-1];
console.log(fibonacci[thirdNumber]);

}