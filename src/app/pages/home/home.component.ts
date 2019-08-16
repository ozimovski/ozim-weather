import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
// interfaces
import { ForecastResponse, CurrentWeatherResponse } from './../../shared/interfaces/response.interface';
// services
import { StorageService } from './../../shared/services/storage.service';
import { ForecastService } from './../../shared/services/forecast.service';
// other
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public city = 'Maribor';
  public weatherData: CurrentWeatherResponse;
  public forecastData: ForecastResponse;
  public dataReceived: string;
  public isLoading = true;
  constructor(
    private forecastService: ForecastService,
    private translate: TranslateService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    if (this.storage.getForecast() === null) {
      this.getWeatherData();
      this.getForecastData();
    } else {
      this.weatherData = this.storage.getWeather();
      this.forecastData = this.storage.getForecast();
      this.dataReceived = this.storage.getDataReceived();
      this.isLoading = false;
    }
  }

  public getWeatherData(): void {
    this.forecastService.getCurrentWeather(this.city).subscribe(res => {
      this.weatherData = res;
      const dataReceived = moment.unix(res.dt).toISOString();
      this.dataReceived = dataReceived;
      this.storage.setWeather(res);
      this.storage.setDataReceived(dataReceived);
    });
  }

  public getForecastData(): void {
    this.forecastService.getForecast(this.city).subscribe(res => {
      this.forecastData = res;
      this.storage.setForecast(res);
      this.isLoading = false;
    });
  }

  public refreshForecast(): void {
    this.isLoading = true;
    this.getWeatherData();
    this.getForecastData();
  }

  setLanguage(lang: string): void {
    this.isLoading = true;
    this.translate.use(lang);
    this.getWeatherData();
    this.refreshForecast();
  }
}
