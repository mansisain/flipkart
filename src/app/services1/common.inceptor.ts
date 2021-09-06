import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class CommonInterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        // console.log("Interceptor Test");
        let myTok = localStorage.getItem("FKToken");
        let newreq = req.clone({setHeaders: {
            Authorization: "Bearer "+myTok}
        });
        return next.handle(newreq);

    }
}