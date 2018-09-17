// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //Starting with an empty array
  var res = [];
  
  //Get child argument from built-in arguments object
  var child = arguments[1];
  
  //If there is no child argument, then this is initial call
  //We should call document.body
  if (child === undefined) {
    var curr = document.body;
  } else {
    var curr = child;
  }
  
  //If current element has className class, we append to our array
  var classList = curr.classList;
  if (_.contains(classList, className)) {
    res.push(curr);
  }
  
  //Getting children
  var children = curr.childNodes;

  //Iterate body object to find elements with className
  children.forEach(function(child) {
    //Add elements that match className to res array
    res.push(getElementsByClassName(className, child));
  });
  
  //flatten our nested result array
  return _.flatten(res);
  
  
  
};
