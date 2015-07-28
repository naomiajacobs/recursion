// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var type = typeof obj;

  //
  if (type === 'number' || type === 'boolean') {
    return obj.toString();
  }

  else if (obj === null) {
    return 'null';
  }

  else if (type === 'string') {
    return '"' + obj + '"';
  }

  else if (Array.isArray(obj)) {
    var stringified = '[';
    for (var i = 0; i < obj.length; i++) {
      stringified += stringifyJSON(obj[i]);
      if (i < obj.length-1) {
        stringified += ',';
      }
    }
    stringified += ']';
    return stringified;
  }

};
