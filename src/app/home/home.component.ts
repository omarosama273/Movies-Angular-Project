import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
imgUrl:string='https://image.tmdb.org/t/p/original';
movieList:any[]=[];
tvList:any[]=[];

  constructor(private _MoviesService:MoviesService , private spinner: NgxSpinnerService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  getMovies(){
    this.spinner.show();
    this._MoviesService.getTrend('movie').subscribe((data)=>{
    this.movieList=data.results.splice(1,16);

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    })
  }
    getTv(){
      this._MoviesService.getTrend('tv').subscribe((data)=>{
      this.tvList=data.results.splice(1,10);
      })
    }

  ngOnInit(): void {

    this.getMovies();
    this.getTv();
  }

}
