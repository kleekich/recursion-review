// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (obj === null) {
    return 'null';
  //undefined 
  } else if (obj === undefined) {
    return undefined; 
  //string type
  } else if ( typeof obj === 'string') {
    return '"' + obj + '"';
  //other primitive types
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  //Array
  } else if (Array.isArray(obj)) {
    //Start stringifiedJSON with bracket
    if (obj.length === 0) {
      return '[]';
    } else {
      var stringifiedJSON = '[';
      //Iterate array and build our stringifiedJSON
      for (var i = 0; i < obj.length; i++) {
        stringifiedJSON = stringifiedJSON.concat(stringifyJSON(obj[i]));
        stringifiedJSON = stringifiedJSON.concat(',');
      }
      stringifiedJSON = stringifiedJSON.slice(0, stringifiedJSON.length - 1);

      //close bracket
      stringifiedJSON = stringifiedJSON.concat(']');
      //return stringifiedJSON 
      return stringifiedJSON;
    }
  //Object
  } else {
    if ( Object.keys(obj).length === 0) {
      return '{}';
    } else {
      //Start stringfiedJSON with curly bracket
      var stringifiedJSON = '{';
      
      //Iterate object properties and build our string
      for (var key in obj) {
        //If we have function or undefined for value, we skip.
        if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
          //Add key and colon
          stringifiedJSON = stringifiedJSON.concat('"' + key + '"').concat(':');
          //recursively add value and add comma
          stringifiedJSON = stringifiedJSON.concat(stringifyJSON(obj[key])).concat(',');
        }
      }
      //Check for empty object
      if (stringifiedJSON.length === 1) { 
        return '{}';
      } else {
        //Get rid of last comma
        stringifiedJSON = stringifiedJSON.substring(0, stringifiedJSON.length - 1);
        //Close bracket
        stringifiedJSON = stringifiedJSON.concat('}');

        //return stringifiedJSON
        return stringifiedJSON;
      }
    }
  }

};
