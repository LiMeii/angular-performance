import { Injectable } from "@angular/core";

@Injectable()
export class AService {

    constructor() {
        console.log("this is Aservice, no matter using or not, Aservice will awalys be bundled.");
    }
}