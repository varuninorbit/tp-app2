import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { TriggerService } from '../_services/trigger.service';

@Injectable()
export class TriggerHttpInterceptor implements HttpInterceptor {

    constructor(private trigger: TriggerService){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.body && evt.body.trigger)
                        //console.log(evt.body.success.message, evt.body.success.title);
                        this.trigger.hit(evt.body.trigger);
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        //console.error(err.error.message, err.error.title);
                    } catch(e) {
                       // console.error('An error occurred in trigger', '');
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
    
}