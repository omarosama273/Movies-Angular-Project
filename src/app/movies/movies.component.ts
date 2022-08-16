import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  imgUrl: string = 'https://image.tmdb.org/t/p/original';
  movieList: any[] = [];
  pages :number[]=[1,2,3,4,5,6]
  term: string = '';
  constructor(private _MoviesService: MoviesService) { }
  getPaginationItem(pages:number) {
    this.pages = new Array(10).fill("").map((x,i)=>i+1)
    this._MoviesService.getTrendPaginationItem('movie',pages).subscribe((data) => {
      this.movieList = data.results;
    })
  }
  ngOnInit(): void {
    this.getPaginationItem(1);
  }

}
