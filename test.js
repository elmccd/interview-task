/**
 * Refactor and fix potential bugs.
 */

var parentNode = document.querySelector('.my-app');

var getHttpsLinks = function () {

  parentNode = parentNode || document;

  var links = Array.prototype.slice.call(parentNode.querySelectorAll('a'));

  var httpsLinks = [];

  links.forEach(function (link) {
    if (link.attributes.href.value.indexOf('https://')) {
      httpsLinks.push(link.attributes.href.value);
    }
  });

  return links;
};
