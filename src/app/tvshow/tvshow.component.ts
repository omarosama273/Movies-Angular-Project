import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  tvList: any[] = [];
  pages :number[]=[1,2,3,4,5,6]
  term2: string = '';
  imgUrl: string = 'https://image.tmdb.org/t/p/original';
  constructor(private _MoviesService: MoviesService) { }
  getPaginationItem(pages:number) {
    this.pages = new Array(10).fill("").map((x,i)=>i+1)
    this._MoviesService.getTrendPaginationItem('tv',pages).subscribe((data) => {
      this.tvList = data.results;
    })
  }
  ngOnInit(): void {
    this.getPaginationItem(1);
  }
}
