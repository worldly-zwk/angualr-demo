import { Component ,Input} from '@angular/core'

@Component({
    selector:"app-default",
    template: `
        <div class="default">
            <img [src]="image" alt="">
            <p class="mainTitle">{{mainTitle}}</p>
            <p class="subtitle">{{subtitle}}</p>
            <a class="wrgog retainb" *ngIf="goUrl" [routerLink]="goUrl">去逛逛</a>
        </div>
    `,
    styles: [`
        .default{
            width: 100%;
            height: 100%;
            background: #fff;
            padding-top: 1.3rem;
            box-sizing: border-box;
        }
        .default img{
            width: 2.65rem;
            height: 2rem;
            display: block;
            margin: 0 auto .4rem;
        }
        .default .mainTitle{
            font-size: .28rem;
            color: #666;
            margin-bottom: .2rem;
            text-align: center;
        }
        .default .subtitle{
            font-size: .24rem;
            color: #999;
            margin-bottom: .8rem;
            text-align: center;
        }
        .default .wrgog{
            display: block;
            margin: 0 auto;
            width: 2.4rem;
            height: .8rem;
            line-height: .8rem;
            font-size: .3rem;
            color: #d7000f;
            text-align: center;
        }
    `]
})

export class DefaultComponent{
    @Input() mainTitle:string="空空如也~";
    @Input() subtitle:string="每天都给自己一个惊喜吧";
    @Input() image:string;
    @Input() goUrl:string;
    constructor(){}
}