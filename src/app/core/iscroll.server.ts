import { Injectable} from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Injectable()

export class IscrollServer{
    private myiscroll;
    public data=new Subject<any>();
    constructor( private http : Http){ }
    create(el){
        function appendContent(content) {
            var ul = document.getElementById('Content');
            ul.innerHTML = ul.innerHTML + content;
        }
        var PullDown=$("#PullDown"),
            PullUp=$("#PullUp").show();
        var isPullUp =false;
        this.myiscroll=new IScroll(el,{
            probeType:3,
            preventDefault:false,
            fadeScrollbars:true
        })
        this.myiscroll.on("scroll",function(){
            var height=this.y,
                bottomHeight=this.maxScrollY - height;
            if(bottomHeight>=0){
                isPullUp=true;
                return ;
            }
        })
        this.myiscroll.on("scrollEnd",()=>{
            if(isPullUp){
                this.getajax();
            }
        })
    }
    getajax(){
        this.http.get("http://localhost:3000/list").toPromise().then(res=>{
            this.data.next(res.json());
        })
    }
    getData(){
        return this.data.asObservable();
    }
    refresh(){
        this.myiscroll.refresh();
    }
}