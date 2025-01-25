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


  private isNull(item:any) {
    let notNull;
    return (notNull = item ? item.name : null);
  }
  
  private getImg(image:any){
    let img:string;
    return (img= image? image.medium :'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png')
  }
  
  private transformToIShowDetails(data:IShowDetailsData):IShowDetails{
    
    
    
    
    return{
     
      Name:data.show.name,
      NumEpisodes:data.show.runtime,
      Network:this.isNull(data.show.network),
      Language:data.show.language,
      Rating:data.show.rating.average,
      Time:data.show.schedule.time,
      AirDate:data.show.premiered,
      Status:data.show.status,
      Image:this.getImg(data.show.image)
      
      
    }
  }
}
