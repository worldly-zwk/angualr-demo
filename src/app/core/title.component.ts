import { Component , Input ,OnChanges} from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'app-title',
    template:`
        <header class="header retainbb">
            <p class="back" (click)="back()"></p>
            <h2 *ngIf="!custom">{{title}}</h2>
            <p class="more" [class.bg]="more" *ngIf="!custom"></p>
            <ng-content select=".conter" *ngIf="custom"></ng-content>
            <ng-content select=".right" *ngIf="custom"></ng-content>
        </header>
    ` ,
    styles:[
        `.header{
            height: .88rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .3rem;
            box-sizing: border-box;
        }
        .back{
            width: .32rem;
            height: .32rem;
            background: url(/assets/images/2x/back@2x.png) no-repeat;
            background-size: contain;
        }
        h2{
            color: #242424;
            font-size: .36rem;
        }
        .more{
            width: .44rem;
            height: .44rem;
        }
        .bg{
            background: url(/assets/images/2x/more@2x.png) no-repeat;
            background-size: contain;
        }
        `
    ]
})

export class TitleComponent{
    @Input() custom:boolean=false;
    @Input() title:string;
    @Input() more:boolean=true;
    constructor( private router : Router){
        
    }
    back(){
        this.router.navigate(["../"])
    }
}