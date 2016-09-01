var $popup = $('div.popup');
var $purchase = $('div.purchase');
var $about = $('div.about');
var $otherLinksContact = $("a[id!='Contact']");
var $otherLinksPurchase = $("a[id!='Purchase']");
var $otherLinksAbout = $("a[id!='About']");

$(document).ready(function(){
  $popup.hide();
  $purchase.hide();
  $about.hide();
});
$('#Contact').click(function(e){
  e.preventDefault();
  $popup.fadeIn(1700);
});

$('#Purchase').click(function(e){
  e.preventDefault();
  $purchase.fadeIn(1700);
});

$('#About').click(function(e){
  e.preventDefault();
  $about.fadeIn(1700);
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

$otherLinksAbout.click(function(e){
  if (this == $('#close')) {
    $about.fadeOut(1500);
    e.preventDefault();
  }
  else {
    $about.fadeOut(1500);
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
