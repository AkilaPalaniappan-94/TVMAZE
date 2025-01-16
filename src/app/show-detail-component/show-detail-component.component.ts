import { Component } from '@angular/core';
import { ShowDetailsService } from '../show-details.service';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './show-detail-component.component.html',
  styleUrl: './show-detail-component.component.css'
})
export class ShowDetailComponentComponent {
  show:IShowDetails = {
    Name: "King of the Hill",
    NumEpisodes: 138,
    Network:"Fox",
    Language: "EN ",
    Rating: 7.5,
    Time:"8PM C",
    AirDate: "Dec 1999",
    Status:"Canceled"
  }


  

}
