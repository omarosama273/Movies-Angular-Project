import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
peopleList:any[]=[];
imgUrl: string = 'https://image.tmdb.org/t/p/original';
  constructor(private _MoviesService:MoviesService) { }
   getPeople(){
    this._MoviesService.getTrend('person').subscribe((data)=>{
      this.peopleList=data.results;
    })

   }
  ngOnInit(): void {
    this.getPeople()
  }

}
