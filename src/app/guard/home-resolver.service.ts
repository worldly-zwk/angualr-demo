import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot , Resolve} from '@angular/router'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class BanderService implements Resolve<any>{
    constructor(private http: Http) { }
    resolve(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
        return this.http.get("http://localhost:3000/home").toPromise().then(res=>res.json(),err=>console.log(err))
    }
}