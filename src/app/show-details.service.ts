import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ShowDetailsService {

  constructor(private httpClient:HttpClient) { }

  

  getShows(searchTerm: string) {
    console.log("in service");

    return this.httpClient
      .get<IShowDetailsData[]>(
        `http://api.tvmaze.com/search/shows?q=${searchTerm}`
      )
      .pipe(
        map((data) => {
          
          return data.map((show) => {
           
            return this.transformToIShowDetails(show);
          });
        })
        
      );
  }
  
  
  private transformToIShowDetails(data:IShowDetailsData):IShowDetails{
    
    console.log("in transform");
    console.log(data.runtime);
    
    return{
     
      Name:data.show.name,
      NumEpisodes:data.runtime,
      
      
    }
  }
}
