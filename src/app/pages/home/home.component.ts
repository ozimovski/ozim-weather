import { Response } from './../../shared/interfaces/response.interface';
import { ForecastService } from './../../shared/services/forecast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private forecastService: ForecastService) {}

  ngOnInit() {
    this.forecastService.getForecast('Ottawa').subscribe(res => {
      res.list.map((l, index) => console.log(l.main.temp));
    });
  }
}
