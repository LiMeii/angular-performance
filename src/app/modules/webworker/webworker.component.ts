import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./webworker.component.html"
})

export class WebworkerComponent implements OnInit {
    result = 0;

    ngOnInit() {
        var myWorker = new Worker("./mock-data/worker.js");
        myWorker.postMessage([5, 3]);

        const scope = this;
        myWorker.onmessage = function (e) {
            scope.result = e.data;
            console.log("this is calculate result " + e.data);

        }
    }

}