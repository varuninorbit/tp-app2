import { Injectable } from "@angular/core";
import { GlobalService } from '../_services';
@Injectable({
  providedIn: "root",
})
export class ApiTokenService {
  constructor(private gs: GlobalService){    
  }

  get token(): string {
      let store =  this.gs.store() ;
      let Lstore = this.gs.literal.resolve(store);
      return Lstore('user.api_token');
  }
}
