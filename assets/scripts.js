$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js');
  });
}
