import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { BaseModel } from 'src/app/models/base.model';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { QueryOptions } from './query-options';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    super();
  }

  find<T extends BaseModel[]>(route: string, queryOptions: QueryOptions) {
    const queryParameters = queryOptions.toQueryParameters();
    const url = `${this.apiUrl}/${route}${queryParameters}`;
    return this.http.get<T>(url)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  get<T extends BaseModel>(route: string, objectId: string): Observable<T> {
    const url = `${this.apiUrl}/${route}/${objectId}`;
    return this.http.get<T>(url)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }
}

