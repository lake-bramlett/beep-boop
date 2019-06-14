//business logic//
function runBeepBoop(num) {
  console.log('input number: ' + num);


};//function runBeepBoop




//user interface logic///
$(document).ready(function () {
  console.log('jquery is enabled');

  $('form button').click(function () {
    runBeepBoop(parseInt($('input#user-input').val()));
  });//click event

});//jquery
