var makeStopwatch = function() {
    var elapsed = 0;
    var stopwatch = function() {
	console.log(elapsed);
	return elapsed;
    };
    var increase = function() {elapsed++;};
    setInterval(increase, 1000);
    return stopwatch;
};

var testStopwatch = function() {
    var stopwatch1 = makeStopwatch();
    var stopwatch2 = null;
    setTimeout(function() {
	stopwatch2 = makeStopwatch();
    }, 3000);
    setTimeout(function() {stopwatch1()}, 4000);
    setTimeout(function() {stopwatch2()}, 5000);
}

exports.makeStopwatch = makeStopwatch;
exports.testStopwatch = testStopwatch;