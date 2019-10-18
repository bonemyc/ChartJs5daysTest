import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';
import {map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart: [];

  constructor(private _weather: WeatherService){}

  ngOnInit(){
    this._weather.dailyWeatherForecast().subscribe(res =>{
      
      let currentTemp = res['list'].map(res => res.main.temp)
      let windSpeed = res['list'].map(res => res.wind.speed)
      let temp_max = res['list'].map(res => res.main.temp_max)
      let temp_min = res['list'].map(res => res.main.temp_min)
      let alldates = res['list'].map(res => res.dt)
      // console.log(`Response temparature: ${currentTemp} °C`) 
      // console.log(`Response date: ${alldates} `) 
      let weatherDates = []
      alldates.forEach(res => {
        let jsdate = new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('th' , {year: 'numeric', month : 'short' , day : 'numeric'}))
      })
      console.log(weatherDates)

      

      this.chart = new Chart('canvas',{
        
        type : 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              label : "Temparature in °C",
              data: currentTemp,
              borderColor : '#F55633',
              backgroundColor: 'rgba(255, 0, 0)', 
              fill : false,
              borderWidth: 1

            },
            {
              label : "Wind Speed in km/h",
              data: windSpeed,
              borderColor : '#63F078',
              backgroundColor: 'rgba(101, 202, 128  , 0.5)',
              fill : true,
              fillColor : '#94EC84 '
              

            },
          ]
        },
        options: {
          legend: {
            display : false
          },
          scales : {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })


    })



    // this._weather.dailyForecastUnitMaxTemp().subscribe(res =>{
      
    //   let maxTemp = res
    //   console.log(`Max temparature: ${maxTemp} °C`) 

    // })
    // this._weather.dailyForecastUnitMinTemp().subscribe(res =>{
      
    //   let minTemp = res
    //   console.log(`Min temparature: ${minTemp} °C`) 

    // })
    // this._weather.dailyForecastWeather().subscribe(res =>{
      
    //   let weather = res
    //   console.log(`${weather} `) 
    //   this._weather.dailyForecastWeatherDesc().subscribe(res =>{
      
    //     let weatherDes = res
    //     console.log(`${weatherDes} `) 
  
    //   })

  

    



  
  
  }


}
