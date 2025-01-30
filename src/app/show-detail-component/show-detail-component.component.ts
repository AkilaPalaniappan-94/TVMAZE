import { Component, Input } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-detail-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './show-detail-component.component.html',
  styleUrl: './show-detail-component.component.css'
})
export class ShowDetailComponentComponent {
  @Input() show:IShowDetails[]=[{
    Name: "",
    NumEpisodes: 0,
    Network:"",
    Language: "",
    Rating: 0,
    Time:"",
    AirDate: "",
    Status:"",
    Image:""
  }];

  
}
