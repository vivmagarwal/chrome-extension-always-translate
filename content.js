const elementsWithTranslateNo = document.querySelectorAll('[translate="no"]');
elementsWithTranslateNo.forEach((el) => {
  el.removeAttribute("translate");
});
