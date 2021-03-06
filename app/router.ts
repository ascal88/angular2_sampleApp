import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error404.component';
import { EventListResolver } from './events/events-list-resolver.service'
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { EventResolver } from './events/event-resolver.service';

export const appRoutes: Routes = [

    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCReateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }

]