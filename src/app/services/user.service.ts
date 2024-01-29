import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser:User;
  authHeaders = {'Content-type':'application/json','Token':''};
  regHeaders = {'Content-type':'application/json'};

  constructor(private url:UrlService) { }

  async checkLogin() {
    let token = localStorage.getItem('Token');
    if (token) {
      let resp = await fetch(this.url.url + 'users/' + token + '/auth');
      if (resp.status===200) {
        this.loggedInUser = await resp.json();
      }
    }
  }

  async login(username:string,password:string): Promise<void> {
    let credentials = {
      'username':username,
      'password':password
  };

  let resp = await fetch(this.url.url + 'users/auth', {method:'POST',body:JSON.stringify(credentials),
  headers:this.regHeaders});

if (resp.status===200) {
  let token = await resp.json();
  localStorage.setItem('Token', token);
  }
}

logOut(): void {
  localStorage.clear();
  this.loggedInUser = null;  //workaround in tsconfig.json
}


}
