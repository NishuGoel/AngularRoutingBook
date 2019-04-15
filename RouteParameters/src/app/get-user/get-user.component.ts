import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFetch } from '../user-fetch';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  user: UserFetch;
  displayData: boolean;

  constructor(private activateRoute: ActivatedRoute, private dataservice: DataService) {
    console.log(this.activateRoute.snapshot.paramMap.get('id') );
   }

  ngOnInit() {
    const id= +this.activateRoute.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id: number) {
    this.dataservice.getUser(id).subscribe(data => {
      this.user = data;
     this.displayData=true;
    });
  }
}
