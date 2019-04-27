import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  
}
