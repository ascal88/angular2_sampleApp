import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Subject, Observable } from 'rxjs/RX';

@Injectable()
export class VoterService {

    constructor(private http: Http) { }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.delete(url).subscribe();
    }

    voter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.post(url, JSON.stringify({}), options).subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.includes(voterName);
    }

     private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}