export interface City {
  id: number;
  name: string;
  country: string;
  timezone: number;
}

/*
import { Serializable } from './deserialize.service';

export class City implements Serializable<City> {
  id: number;
  name: string;
  country: string;
  timezone: number;

  deserialize(input) {
    this.id = input.id;
    this.name = input.name;
    this.country = input.country;
    this.timezone = input.timezone;

    return this;
  }
}
*/
