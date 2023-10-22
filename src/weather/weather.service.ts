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

        const weather_data = new Map(); 

        for(const city of Citynames){

            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`;

            const response = await axios.get(URL);

            weather_data[city.name] = response.data.main;

        }

        // console.log();

        return weather_data;


    }
}
