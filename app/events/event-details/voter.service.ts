import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    voter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.includes(voterName);
    }
}