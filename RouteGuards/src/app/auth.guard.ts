import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, CanDeactivate } from '@angular/router/src/utils/preactivation';
import { ThirdComponent } from './third/third.component';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanDeactivate<ThirdComponent> {
  component: ThirdComponent;
  route: ActivatedRouteSnapshot;

  canDeactivate(component: ThirdComponent, 
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }
}
