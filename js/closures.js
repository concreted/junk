var makeStopwatch = function() {
    var elapsed = 0;
    var stopwatch = function() {
	return elapsed;
    };
    var increase = function() {elapsed++;};
    setInterval(increase, 1000);
    return stopwatch;
};

var testStopwatch = function() {
    var stopwatch1 = makeStopwatch();
    var stopwatch2 = null;

    console.log("Stopwatch1: " + stopwatch1());
    console.log("Creating Stopwatch2 in 2 seconds...");

    setTimeout(function() {
	stopwatch2 = makeStopwatch();
	console.log("Stopwatch1: " + stopwatch1());
	console.log("Stopwatch2: " + stopwatch2());
	
	setInterval(function() {
	    console.log("Stopwatch1: " + stopwatch1())
	    console.log("Stopwatch2: " + stopwatch2());
	}, 1000);
    
    }, 2000);
    
    return;
}

testStopwatch();