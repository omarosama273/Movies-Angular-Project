import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { RegisterReq } from './register-req';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



userData:any=new BehaviorSubject(null);

  saveUserData(){
let token = localStorage.getItem("userToken")
let decodet =jwtDecode(JSON.stringify(token))
this.userData.next(decodet);
console.log(this.userData);
  }


  constructor(private HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken')!=null){
      this.saveUserData();
    }
   }

signUp(registerData:RegisterReq):Observable<any>
{

 return this.HttpClient.post('https://routeegypt.herokuapp.com/signup',registerData)
}
signin(loginData:RegisterReq):Observable<any>
{
 return this.HttpClient.post('https://routeegypt.herokuapp.com/signin',loginData)
}
logOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigateByUrl("/login")
}


}
