var $popup = $('div.popup');
var $otherLinks = $("a[id!='Contact']");

$popup.hide();
$('#Contact').click(function(e){
  e.preventDefault();
  $popup.fadeIn(1700);
});

$otherLinks.click(function(e){
  if (this == $('.close')) {
    $popup.fadeOut(1500);
    e.preventDefault();
  }
  else {
    $popup.fadeOut(1500);
  }
});
