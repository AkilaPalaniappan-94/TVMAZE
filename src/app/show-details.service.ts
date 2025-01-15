import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {

  constructor(private httpClient:HttpClient) { }
  
  
  private transformToIShowDetails(data:IShowDetailsData):IShowDetails{
    return{
      NumEpisodes:data.runtime,
    Network:data.network.name,
    Language:data.language,
    Rating:data.rating.average,
    Time:data.schedule.time,
    AirDate:data.premiered,
    Status:data.status
    }
  }
}
