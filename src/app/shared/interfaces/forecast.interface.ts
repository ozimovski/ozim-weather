export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
}
