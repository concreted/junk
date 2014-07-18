var _ = require("underscore");

var add = function(a,b) {
    return a+b;
};

var a = _.reduce([1,2,3], add);

console.log(a);