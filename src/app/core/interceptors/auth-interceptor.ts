import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const apiKey = environment.apiKey;
    const apiSecret = environment.apiSecret;

    const authReq = req.clone({
      headers: req.headers
        .set('x-api-key', apiKey)
        .set('x-api-secret', apiSecret)
    });

    return next.handle(authReq);
  }
}
