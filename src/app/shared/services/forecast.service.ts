import { Response } from './../interfaces/response.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
// services
import { HelperService } from './helper.service';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private httpClient: HttpClientService, private helper: HelperService) {}

  public getForecast(city: string): Observable<Response> {
    return this.httpClient.get(
      this.helper.getForecastUrl() + `?q=${city}&units=metric&appid=770d774e60db68397302f1068583ff79`
    );
  }
}
