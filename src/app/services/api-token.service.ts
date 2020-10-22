import { Injectable } from "@angular/core";
import { GlobalService } from '../_services';
@Injectable({
  providedIn: "root",
})
export class ApiTokenService {
  constructor(private gs: GlobalService){    
  }

  get token(): string {
      return this.gs.store().apiToken; //TODO a register for apiToken type
  }
}
