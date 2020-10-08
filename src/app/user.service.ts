import { Injectable } from "@angular/core";
import { store } from 'src/app/_services/store.service.js'


@Injectable()
export class UserService {
    me(){
        return store.user;
    }
}
