import { Component, OnInit } from "@angular/core";
import { cube } from "../../shared/common-utility";

@Component({
    templateUrl: "./dashboard.component.html"
})

export class DashboardComponent implements OnInit {

    ngOnInit() {
        console.log("here is the cube result " + cube(3));
    }

}