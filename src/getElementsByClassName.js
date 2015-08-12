// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, elem) {
  
  //makes array of elements with the class
  var yesHasClass = [];

  elem = elem || document.body;

  //only runs if the child is an element node
  if (elem.nodeType === 1) {

    //add element to list if it has the class
    if (elem.classList.contains(className)) {
      yesHasClass.push(elem);
    }

    //call hasClass on elem's children
    _.each(elem.childNodes, function(el) {
      
      var childResults = getElementsByClassName(className, el);
      yesHasClass = yesHasClass.concat(childResults);
    });
  }

  //return the list of elements
  return yesHasClass;

};
