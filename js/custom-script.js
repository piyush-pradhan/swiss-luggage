
$( document ).ready(function() {
  $('#results-australia').hide();
  $('#results-austria').hide();
  $('#results-canada').hide();
  $('#results-germany').hide();
  $('#results-indonesia').hide();
  $('#results-russia').hide();
  $('#results-switzerland').hide();
  $('#results-taiwan').hide();
  $('#results-uk').hide();

  var lastClicked = '';
  var countrySelector = $('#shopfinder_terms');
  var onContryChange = function() {
    if(lastClicked != '') $('#' + lastClicked).hide();
    $('#' + countrySelector.val()).show();
    lastClicked = countrySelector.val();
  }
  countrySelector.change(onContryChange);
});
