onmessage = function(e) {
    this.console.log("this is the onmessage function in webworker");
    var workerResult = e.data[0] * e.data[1];

    this.postMessage(workerResult);
}