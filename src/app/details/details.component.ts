import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
currentId:number=0;
details:any={};
mediaType:string='';
imgUrl: string = 'https://image.tmdb.org/t/p/original';
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) {
    this.currentId =  this._ActivatedRoute.snapshot.params['id']
    this.mediaType=this._ActivatedRoute.snapshot.params['mediaType']
  }
getTrenddetailsItem(){
  this._MoviesService.getTrenddetailsItem(this.mediaType,this.currentId).subscribe((data)=>{
    this.details=data;

  })
}
  ngOnInit(): void {
    this.getTrenddetailsItem()

  }

}
