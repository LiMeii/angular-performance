import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./deep-understanding-aot.component.html"
})

export class DeepUnderstandingComponent implements OnInit {

    public title ="let's learn angular compiler together！";
    public time = new Date();

    ngOnInit() {
        setInterval(()=>{
            this.time = new Date();
        },1000)
    }
}