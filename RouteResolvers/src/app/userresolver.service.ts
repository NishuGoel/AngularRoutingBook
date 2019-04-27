import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from './user-data';
@Injectable({
	providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
 	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<User>{
        const id= route.paramMap.get('id');

     }
    
    
     constructor(private route: ActivatedRoute){
        this.user = this.route.snapshot.data['user'];
    }    
    
    
    ngOnInit(){
        const user: UserResolver = this.route.snapshot.data['user'];
    }
    



}
