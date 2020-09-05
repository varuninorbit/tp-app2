import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Urls } from '../environments/environment';
import { IUser } from './types/i-user';
import { store } from 'src/app/_services/store.service.js'


@Injectable()
export class UserService {
    me(){
        return store.user;
    }
}
