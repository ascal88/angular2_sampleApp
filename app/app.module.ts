import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { appRoutes } from './router';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),

    ],
    declarations:
    [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        Error404Component
    ],
    providers:
    [
        EventService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCReateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        {
            provide: TOASTR_TOKEN, useValue: toastr
        },
        {
            provide: JQ_TOKEN, useValue: jQuery
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(createEventComponent: CreateEventComponent): boolean {
    if (createEventComponent.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}
