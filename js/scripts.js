//business logic//
function runBeepBoop(input) {
  console.log('input number: ' + input);

  var rangeNumbers = [];

  for (i = 0; i <= input; i++) {
    rangeNumbers.push(i);
    console.log('number range: ' + rangeNumbers);
  };//for loop to get rangeNumbers

  rangeNumbers.forEach(function(i) {
    if (i.toString().indexOf('3')  > -1) {
      $('.output').append("<em>I'm sorry, Dave. I'm afraid I can't do that.</em>")
    } else if (i.toString().indexOf('2')  > -1) {
      $('.output').append("<em>Boop!</em>")
    } else if (i.toString().indexOf('1')  > -1) {
      $('.output').append("<em>Beep!</em>")
    } else {
      $('.output').append(i);
    };// if/else
  });//rangeNumbers.forEach

  console.log('var rangeNumbers is a : ' + typeof rangeNumbers)

};//function runBeepBoop




//user interface logic///
$(document).ready(function () {
  console.log('jquery is enabled');

  $('form button').click(function () {
    runBeepBoop(parseInt($('input#user-input').val()));
  });//click event

});//jquery
