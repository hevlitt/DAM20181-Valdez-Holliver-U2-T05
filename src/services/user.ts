import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private _curp: string;

    constructor() {
    }

    set curp(newVal: string) {
        this._curp = newVal;
    }

    get curp(): string {
        return this._curp
    }



}