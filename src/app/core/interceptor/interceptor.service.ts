import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if(token){
      headers =  headers.set("x-token",token);
      req = req.clone({headers})
    }else{
      req = req.clone({headers})
    }
    return next.handle(req)
  }
}
