// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  //makes array of elements with the class
  var yesHasClass = [];

  var hasClass = function(elem) {

    //only run if the child is an element node
    if (elem.nodeType === 1) {

      //add element to list if it has the class
      if (elem.classList.contains(className)) {
        yesHasClass.push(elem);
        alert(elem);
      }

      //if element has children, run hasClass on each of its children
      if (elem.childNodes.length) {
        for (var i = 0; i < elem.childNodes.length; i++) {
          hasClass(elem.childNodes[i]);
        }
      }
    }
  };

  //call on the document
  hasClass(document.body);

  //return the list of elements
  return yesHasClass;

};
