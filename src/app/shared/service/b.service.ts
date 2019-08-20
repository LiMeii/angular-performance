import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class BService {
    constructor() {
        console.log("this is Bservice, there has one component using this, so Bservice will be bundled");
    }
}