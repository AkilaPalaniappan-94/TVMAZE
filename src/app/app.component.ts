import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowDetailComponentComponent } from "./show-detail-component/show-detail-component.component";
import { ShowSearchComponent } from './show-search/show-search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShowDetailsService } from './show-details.service';
import { IShowDetails } from './ishow-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowDetailComponentComponent, RouterOutlet,ShowSearchComponent,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tv-maze-app';
  showDetail : IShowDetails []=[];

  constructor(private showDetailsService:ShowDetailsService){}
  doSearch(searchValue : string){
    const userInput = searchValue
    this.showDetailsService.getShows(userInput).subscribe(data=>{
      
      this.showDetail=data
    }
    );
    

  }
  
}
