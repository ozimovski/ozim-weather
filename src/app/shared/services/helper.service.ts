import { Injectable } from '@angular/core';

// environment
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() {}

  getForecastUrl(): string {
    return environment.forecast.protocol + environment.forecast.rootUrl + environment.forecast.apiUrl;
  }

  url(): string {
    return 'bu';
  }
}
