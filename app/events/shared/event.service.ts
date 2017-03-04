import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import { IEvent } from './event.model'
import { ISession } from './event.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    getEvents(): Observable<IEvent[]> {
        return this.http.get('/api/events').map((response: Response) => {
            return <IEvent[]>response.json();
        }).catch(this.handleError);
    }

    getEvent(eventId: number): Observable<IEvent> {
        return this.http.get('/api/events/' + eventId).map((response: Response) => {
            return <IEvent>response.json();
        }).catch(this.handleError);
    }

    saveEvent(event): Observable<IEvent> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/events', event, options).map((response: Response) => {
            return response.json();
        }).catch(this.handleError);

    }

    searchSessions(searchTerm: string) {
        return this.http.get('/api/sessions/search?search=' + searchTerm).map((response: Response) => {
            return <IEvent>response.json();
        }).catch(this.handleError);

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
