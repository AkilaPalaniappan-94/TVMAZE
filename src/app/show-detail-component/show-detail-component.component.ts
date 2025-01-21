import { Component } from '@angular/core';
import { ShowDetailsService } from '../show-details.service';
import { IShowDetails } from '../ishow-details';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-show-detail-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './show-detail-component.component.html',
  styleUrl: './show-detail-component.component.css'
})
export class ShowDetailComponentComponent {
  show:IShowDetails = {
    Name: "",
    NumEpisodes: 0,
    Network:"",
    Language: "",
    Rating: 0,
    Time:"",
    AirDate: "",
    Status:"",
    Image:""
  }

  constructor(private showDetailsService:ShowDetailsService){
    this.showDetailsService.getShowDetails("the simpsons").subscribe(data=>this.show=data);

  }


  

}
