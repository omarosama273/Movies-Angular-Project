import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(trendingsItem:any[],term2:string): any[] {
    return trendingsItem.filter((item)=>item.item.toLowerCase().includes(term2.toLowerCase()));
  }


  }


