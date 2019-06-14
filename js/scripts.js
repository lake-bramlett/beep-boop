//business logic//
function runBeepBoop(input) {
  console.log('input number: ' + input);

  var rangeNumbers = [];
  var outputNumbers = []

  for (i = 0; i <= input; i++) {
    rangeNumbers.push(i);
    console.log('number range: ' + rangeNumbers);
  };//for loop to get rangeNumbers

  rangeNumbers.forEach(function(i) {
    if (i === 3) {
      outputNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i === 2) {
      outputNumbers.push("Boop!")
    } else if (i === 1) {
      outputNumbers.push("Beep!")
    } else {
      outputNumbers.push(i);
    };// if/else
  });//rangeNumbers.forEach

  console.log('output numbers are: ' + outputNumbers);

};//function runBeepBoop




//user interface logic///
$(document).ready(function () {
  console.log('jquery is enabled');

  $('form button').click(function () {
    runBeepBoop(parseInt($('input#user-input').val()));
  });//click event

});//jquery
