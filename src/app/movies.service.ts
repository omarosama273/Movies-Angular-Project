import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  imgUrl: string = 'https://image.tmdb.org/t/p/original';


  constructor(private _HttpClient:HttpClient) { }
  getTrendPaginationItem(  media: any , page:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${media}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
  }
  getTrenddetailsItem(  media: any , id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`);
  }
  getTrend(  media: any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0Gu1ZiJFTUh0F9DPPnr6Xm9ARvuowa5U--HIyfTSqVDuXTL6RnyEleEZ4`);
  }
}
