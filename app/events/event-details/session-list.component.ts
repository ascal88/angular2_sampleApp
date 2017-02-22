import { Component, Input, Output, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
    selector: 'session-list',
    moduleId: module.id,
    templateUrl: 'session-list.component.html'

})
export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    filterSessions(filterBy) {
        if (filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => { return session.level.toLocaleLowerCase() === filterBy })
        }

    }

    sortByNameAsc(s1: ISession, s2: ISession) {
        if (s1.name > s2.name) return 1
        else if (s1.name === s2.name) return 0
        else return -1;
    }
    
    sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length;
    }

}



