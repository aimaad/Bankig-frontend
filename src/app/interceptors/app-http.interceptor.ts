import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("*************")
    console.log(req.url);
    if(!req.url.includes("/auth/login")){
      let modifiedReq = req.clone({
        headers : req.headers.set('Authorization','Bearer '+this.authService.accessToken)
      });
      return next.handle(modifiedReq);
    }else return next.handle(req);
  }
}
