import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser:User | undefined;
  authHeaders = {'Content-type':'application/json','Token':''};
  regHeaders = {'Content-type':'application/json'};

  constructor(private url:UrlService) { }

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


}
