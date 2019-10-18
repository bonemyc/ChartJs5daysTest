import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyWeatherForecast(){
    return this._http.get("https://api.openweathermap.org/data/2.5/forecast/?appid=686d2c96c7002be9b1e714457eac2caf&units=metric&type=accurate&zip=10230,th")
      .pipe(map(result => result));
  }

  //////////////////////////Temparature/////////////////////////////
  dailyForecastUnitCurrentTemp(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather/?appid=686d2c96c7002be9b1e714457eac2caf&units=metric&type=accurate&zip=10230,th")
      .pipe(map(result => result));//.main.temp));
  }
  dailyForecastUnitMaxTemp(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather/?appid=686d2c96c7002be9b1e714457eac2caf&units=metric&type=accurate&zip=10230,th")
      .pipe(map(result => result));//.main.temp_max));
  }
  dailyForecastUnitMinTemp(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather/?appid=686d2c96c7002be9b1e714457eac2caf&units=metric&type=accurate&zip=10230,th")
      .pipe(map(result => result));//.main.temp_min));
  }

  dailyForecastWeather(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather/?appid=686d2c96c7002be9b1e714457eac2caf&units=metric&type=accurate&zip=10230,th")
      .pipe(map(result => result));//.weather[0].main));
  }
  dailyForecastWeatherDesc(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather/?appid=686d2c96c7002be9b1e714457eac2caf&units=metric&type=accurate&zip=10230,th")
      .pipe(map(result => result));//.weather[0].description));
  }


}
