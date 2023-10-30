import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AdminService } from 'src/admin/admin.service';
@Injectable()
export class UserService {

    constructor(private adminService: AdminService){};

    async getWeather(){
        const API_KEY = "33b415e58997225f35840e473301415d";
        const cities = await this.adminService.FindAll();
        const openWeatherBaseUrl = process.env.API_BASE_URL;
        const weatherData = [];
        for (const city of cities) {
            try {
                const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`;
   
            const response = await axios.get(URL);
            const cityWeather = {
                city: city,
                temperature: response.data.main.temp,
                weatherDescription: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                pressure:response.data.main.pressure,
                feels_like: response.data.main.feels_like,

            };
            weatherData.push(cityWeather);
            } 
            catch (error) 
            {
                console.error(`Failed to fetch weather data for ${city}: ${error.message}`);
            }
        }
        return weatherData;
        
        // console.log();



        }

    


    }

