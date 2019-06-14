//business logic//
function runBeepBoop(input) {

  if (isNaN(input)) {
    console.log('input is not a number');
  };

  var rangeNumbers = [];
  var outputNumbers = [];

  for (i = 0; i <= input; i++) {
    rangeNumbers.push(i);
  };//for loop to get rangeNumbers

  rangeNumbers.forEach(function(i) {
    if (i.toString().indexOf('3')  >= 0) {
      outputNumbers.push(" <em>I'm sorry, Dave. I'm afraid I can't do that.</em>");
    } else if (i.toString().indexOf('2')  >= 0) {
      outputNumbers.push(" <strong>Boop!</strong>");
    } else if (i.toString().indexOf('1')  >= 0) {
      outputNumbers.push(" <strong>Beep!</strong>");
    } else {
        outputNumbers.push(' ' + i);
    };// if/else
  });//rangeNumbers.forEach

  console.log('input number: ' + input)
  console.log('number range: ' + rangeNumbers);
  console.log('output: ' + outputNumbers);

  $('.output').empty().append(outputNumbers.toString())
  $("img").addClass("show");

};//function runBeepBoop




//user interface logic///
$(document).ready(function () {
  console.log('jquery is enabled');

  $('form button').click(function () {
    runBeepBoop(parseInt($('input#user-input').val()));

  });//click event

});//jquery
