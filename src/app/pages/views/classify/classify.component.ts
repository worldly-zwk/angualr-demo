import { Component ,OnInit ,OnDestroy} from '@angular/core'
import { Router , ActivatedRoute ,ParamMap } from '@angular/router'

import { NavigationService } from '../../../core/navigation.service'

@Component({
    templateUrl: "./classify.component.html",
    styleUrls: ['./classify.component.sass']
})

export class ClassifyComponent implements OnInit,OnDestroy{
    private classifyList;
    private classifyFilter;
    constructor( private router : Router , private route :ActivatedRoute ,private navigation : NavigationService){ }
    ngOnInit (){
        this.route.data.subscribe(res=>{
            this.classifyList=res.classify;
        })
        this.navigation.sendMessage(true)
    }
    tabClick (event,name){
        $(event.target).addClass("active").siblings().removeClass("active");
        this.classifyFilter=name;
    }
    ngOnDestroy(){
        this.navigation.sendMessage(false)
    }
}