import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string, options?: any): Observable<any> {
    const httpOptions = {};
    if (options) {
      Object.assign(httpOptions, options);
    }
    return this.httpClient.get(url, httpOptions);
  }
}
