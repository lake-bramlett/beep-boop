//business logic//
function runBeepBoop(num) {
  console.log('input number: ' + num);

  var rangeNumbers = [];

  for (i = 0; i <= num; i++) {
    rangeNumbers.push(i);
    console.log('number range: ' + rangeNumbers);
  };


};//function runBeepBoop




//user interface logic///
$(document).ready(function () {
  console.log('jquery is enabled');

  $('form button').click(function () {
    runBeepBoop(parseInt($('input#user-input').val()));
  });//click event

});//jquery
