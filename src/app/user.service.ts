import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Urls } from '../environments/environment';
import { IUser } from './_models';


@Injectable()
export class UserService {
    Ouser: Observable<IUser>;
    user: IUser; //TODO change type
    constructor(private http: HttpClient) {
        this.Ouser = this.http
            .get<IUser>(Urls.host + 'user/this') //TODO change <any> to user
    }

    getAll() {
        return this.http.get<IUser[]>(`${Urls.host}/users`);
    }

    getById(id: number) {
        return this.http.get(`${Urls.host}users/` + id);
    }

    register(user: IUser) {
        return this.http.post(`${Urls.host}users/register`, user);
    }

    update(user: IUser) {
        return this.http.put(`${Urls.host}users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${Urls.host}users/` + id);
    }
}
