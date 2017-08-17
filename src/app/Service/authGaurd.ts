import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication-service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(route, state);
        }
    subscription: Subscription;
    isLogin:any;
    constructor(private router: Router,private _authService:AuthenticationService) {
        //this._authService.stdLogin.subscribe(test=>console.log(this.isLogin));
     }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger;
        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }
        
        //  this._authService.stdLogin.subscribe(bool => {
        //      console.log(bool);
        //      this.isLogin= bool});
        // this._authService.stdLogin.subscribe(test=>this.isLogin);
       
         if(localStorage.getItem('currentUser')){
             //if(this.isLogin){
             return true;
         }
         else
         {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
         }
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}