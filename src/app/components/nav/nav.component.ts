import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedInUser:User;
  showLogin:boolean = false;
  
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.setup();
  }

  setup() {
    this.us.checkLogin().then(Response => {
      this.loggedInUser = this.us.loggedInUser;
      this.showLogin = false;
    });
  }

  logOut() {
    this.us.logOut();
    this.loggedInUser = null;
  }

}