import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
    selector: 'nav-bar',
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; } 
        @media (max-width: 1200 px) {#searchForm { display:none } }
        li > a.active { color: #F97924 }
    `]
})
export class NavBarComponent {

    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private authService: AuthService, private eventService: EventService) { }

    searchSessions(formValues) {
        this.eventService.searchSessions(formValues.searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        })
    }

}