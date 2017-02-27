var isIE = document.all && !window.atob;

if (isIE){
  $('body').addClass('isIE');
}
