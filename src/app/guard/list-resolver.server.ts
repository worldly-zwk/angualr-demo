import { Injectable } from '@angular/core'
import {ActivatedRouteSnapshot ,RouterStateSnapshot ,Resolve} from '@angular/router'
import { Http } from '@angular/http'

@Injectable()

export class ListServer implements Resolve<any>{
    constructor( private http : Http){ }
    resolve(route : ActivatedRouteSnapshot ,state : RouterStateSnapshot){
        return this.http.get("http://localhost:3000/list").toPromise().then(res=>res.json(),err=>console.log(err))
    }
}