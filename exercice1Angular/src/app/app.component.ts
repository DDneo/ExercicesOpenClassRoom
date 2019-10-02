import { Component, Input } from '@angular/core';
import { Post } from './models/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  	
  title = 'exercice1';
  

  posts : Post [] = [
    {
      title      : "Mon premier post",
      content    : "Vel utebare dissideret sermonem sedentem tum erat ut erat et.1",
      loveIts    : 0,
      created_at : new Date

    },
    {
      title      : "Mon deuxieme post",
      content    : "Vel utebare dissideret sermonem sedentem tum erat ut erat et.2",
      loveIts    : 0,
      created_at : new Date
    },
    {
      title      : "Mon troisième post",
      content    : "Vel utebare dissideret sermonem sedentem tum erat ut erat et.3",
      loveIts    : 0,
      created_at : new Date
    }
  ]
  

  





}
