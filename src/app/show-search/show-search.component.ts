import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-show-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule,FormsModule,ReactiveFormsModule],
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css'
})
export class ShowSearchComponent {

  search=new FormControl('',[Validators.minLength(3),Validators.maxLength(20)]);

  constructor(){
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe(searchValue =>{
      if(!this.search.invalid){

      }
    })
  }

}
