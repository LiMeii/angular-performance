import { Component } from "@angular/core";

import { BService } from "./shared/service/b.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-performance";
  constructor(private bService: BService) { }
}
