import { CurrentWeatherResponse } from './../../shared/interfaces/response.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})
export class CurrentTemperatureComponent implements OnInit {
  @Input() public weather: CurrentWeatherResponse;

  constructor() {}

  ngOnInit() {}
}
