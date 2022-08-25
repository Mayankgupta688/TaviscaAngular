import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export default class EmployeeGuard implements CanActivate {
    constructor(private router: Router) { 
        debugger;
    }

    canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(+routeSnapshot.params['empId'] > 10) {
            this.router.navigate(['/home'])
        }
        return true;
    }
    
}