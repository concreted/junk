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



