// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var type = typeof obj;

  //type defaults
  if (type === 'number' || type === 'boolean') {
    return obj.toString();
  }

  else if (obj === null) {
    return 'null';
  }

  else if (type === 'string') {
    return '"' + obj + '"';
  }

  //array syntax
  else if (Array.isArray(obj)) {

    var arrayStringified = '[';

    //stringify each item in array
    _.each(obj, function(item, key) {
      arrayStringified += stringifyJSON(item);
      if (key < obj.length-1) {
        arrayStringified += ',';
      }
    });

    arrayStringified += ']';

    return arrayStringified;
  }


  //object syntax
  else if (type === 'object') {
    var count = 0;

    var objStringified = '{';

    //stringify each property in object
    _.each(obj, function(item, key) {

      //don't include if undefined or a function
      if (item === undefined || typeof item === 'function') {
        return;

      } else {

        objStringified += stringifyJSON(key) + ':' + stringifyJSON(item);
        count++;
        if (count !== _.size(obj)) {
          objStringified += ',';
        }
      }
      
    });

    objStringified += '}';

    return objStringified;
  }

};
