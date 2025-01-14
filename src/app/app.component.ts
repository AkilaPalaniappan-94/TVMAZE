import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowDetailComponentComponent } from "./show-detail-component/show-detail-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowDetailComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tv-maze-app';
}
