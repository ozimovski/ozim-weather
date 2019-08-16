import { Component, OnInit, Input } from '@angular/core';
import { ForecastResponse } from 'src/app/shared/interfaces/response.interface';

@Component({
  selector: 'app-five-days-forecast',
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.css']
})
export class FiveDaysForecastComponent implements OnInit {
  @Input() forecast: ForecastResponse;

  constructor() {}

  ngOnInit() {}
}
