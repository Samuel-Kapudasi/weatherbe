import { Controller,Get,Param} from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService){};

    @Get('/weather')
    getWeather(){

        return this.weatherService.getWeather();
    }

}
