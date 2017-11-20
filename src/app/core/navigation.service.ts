import {Injectable,Optional } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Injectable()

export class NavigationService{
    public subject = new Subject<any>();
    constructor(){ }
    sendMessage(bool) : void{
        this.subject.next({show:bool})
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}