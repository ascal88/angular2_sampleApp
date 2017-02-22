import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { AuthService } from '../../user/auth.service'

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router, private authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        // if (this.authService.currentUser == null) {
        //     this.router.navigate(['/404']);
        //     return false;
        // }
        const eventExist = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExist)
            this.router.navigate(['/404']);
        return eventExist;

    }
}