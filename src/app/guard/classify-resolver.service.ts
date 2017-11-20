import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Resolve } from '@angular/router'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ClassifyServicer implements Resolve<any>{
    constructor( private http : Http){ }
    resolve(){
        return this.http.get("http://localhost:3000/classify").toPromise().then(res=>res.json())
    }
}