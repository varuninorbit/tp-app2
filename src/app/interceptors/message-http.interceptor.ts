import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { NotifierService } from 'angular-notifier';

@Injectable()
export class MessageHttpInterceptor implements HttpInterceptor {

    constructor(private notifier: NotifierService){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.body && evt.body.message)
                        //console.log(evt.body.success.message, evt.body.success.title);
                        this.notifier.show({
                            type: evt.body.message.type,
                            message: evt.body.message.content,
                            id: evt.body.message.id // Again, this is optional
                        });
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        //TODO: Edit this code
                        /*
                        if(err.error.message, err.error.title){
                            this.notifier.show({
                                type: 'error', 
                                message: err.error.message
                            })
                        }*/
                        console.error(err.error.message, err.error.title);
                    } catch(e) {
                        console.error('An error occurred', '');
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
    
}