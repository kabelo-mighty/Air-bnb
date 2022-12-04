import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { GuardService } from "./guard.service";



@Injectable()

export class AuthService implements CanActivate{
  
  

  constructor(private guardService :GuardService ,private router :Router){
     
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.guardService.IsAuthenticated()) {
      return true
    }else{
      this.router.navigate(['/homepage'])
      return true
    }
  }
}