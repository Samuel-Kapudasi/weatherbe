import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AdminService } from 'src/admin/admin.service';
@Injectable()
export class WeatherService {

    constructor(private adminService: AdminService){};

    async getWeather(){
        const API_KEY = "33b415e58997225f35840e473301415d";

        const Citynames = await this.adminService.FindAll();
        console.log(typeof(Citynames));

        const weather_data = []; 

        for(const city of Citynames){

            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`;

            const response = await axios.get(URL);
            const weatherData = {
                city: city,
                temperature: response.data.main.temp,
                weatherDescription: response.data.weather[0].description,
            };
            weather_data.push(weatherData);

                


        }

        // console.log();

        return weather_data;


    }
}
