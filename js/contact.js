var $popup = $('div.popup');
var $purchase = $('div.purchase');
var $otherLinksContact = $("a[id!='Contact']");
var $otherLinksPurchase = $("a[id!='Purchase']");

$popup.hide();
$purchase.hide();
$('#Contact').click(function(e){
  e.preventDefault();
  $popup.fadeIn(1700);
});

$('#Purchase').click(function(e){
  e.preventDefault();
  $purchase.fadeIn(1700);
});

$otherLinksContact.click(function(e){
  if (this == $('#close')) {
    $popup.fadeOut(1500);
    e.preventDefault();
  }
  else {
    $popup.fadeOut(1500);
  }
});

$otherLinksPurchase.click(function(e){
  if (this == $('#close')) {
    $purchase.fadeOut(1500);
    e.preventDefault();
  }
  else {
    $purchase.fadeOut(1500);
  }
});
