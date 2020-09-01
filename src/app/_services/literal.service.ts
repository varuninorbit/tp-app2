import { Injectable } from '@angular/core';
import * as _ from 'underscore';
@Injectable()
export class LiteralService {
 

    //literal function to access properties via string
    // li(property)('a.b.c')
    resolve(property) {
        return function (str: string) {
            let params = str.split('.');
            let current = property;
            for (let param of params) {
                if (typeof current[param] !== 'undefined')
                    current = current[param];
                else { return false; }
            }
            return current;
        }
    }

}