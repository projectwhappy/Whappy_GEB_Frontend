import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/core/http/authentication.service';
import { Role } from 'src/app/core/enums/role';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let currentUrlSegment = this.router.parseUrl(state.url).root.children['primary'].segments[0].path;
        if (currentUser) {
            // console.log(state);
            if (!currentUser.token) {
                // this.activatedRoute.routeConfig.children
                // route.paramMap.get(0);
                this.router.navigate(['/' + currentUrlSegment + '/'], { queryParams: { returnUrl: state.url }});
                return false;
            }

            // check if route is restricted by role
            if (route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/' + currentUrlSegment + '/'], { queryParams: { returnUrl: state.url }});
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/' + currentUrlSegment + '/'], { queryParams: { returnUrl: state.url }});
        return false;
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (localStorage.getItem('currentUser')) {
    //         // logged in so return true
    //         return true;
    //     }

    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/admin'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }
}