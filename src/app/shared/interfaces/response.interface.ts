import { City } from './city.interface';
import { List } from './forecast.interface';

export interface Response {
  list: List[];
  city: City;
}
