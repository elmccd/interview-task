
var parentNode = document.querySelector('.my-app');

/**
* Function gets all links pointing to the https urls from inside of the
* given parentNode. If parentNode is falsy - look for links in entire document.
*/
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
