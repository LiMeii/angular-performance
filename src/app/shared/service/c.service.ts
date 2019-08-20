import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CService {
    constructor() {
        console.log("this is Cservice, there has no component using this, so Cservice won't be bundled.");
    }
}