import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogIn: boolean = false;
  constructor(private _AuthService:AuthService) { }
  logout(){
    this._AuthService.logOut()
  }
  ngOnInit(): void {
    if(this._AuthService.userData.subscribe(()=>{

    if(this._AuthService.userData.getValue()!=null){
         this.isLogIn=true;
    }
    else{
      this.isLogIn=false;
    }

    })){

    }
  }

}
