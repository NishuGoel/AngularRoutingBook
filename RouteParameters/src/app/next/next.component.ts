import { Component, OnInit } from '@angular/core';
import { UserFetch } from '../user-fetch';
import { DataService } from '../data.service';
import { User } from '../user-data';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {


  displayData: boolean;
  user: UserFetch;
  users: User[] = [];
  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  fetchId = 0;

  getUser() {
    this.dataservice.getUser(this.fetchId).subscribe(data => {
      this.user = data;
     this.displayData=true;
    });
  }
  ngOnInit() {
    this.getUsers();
    this.getUser();
  }
}
