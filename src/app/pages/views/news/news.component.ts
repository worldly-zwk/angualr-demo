import { Component } from '@angular/core'

@Component({
    template: `
        <div class="template">
            <app-title title="消息中心" [more]="false"></app-title>
            <nav class="newsNav retainbb">
                <ul>
                    <li routerLink="activity" routerLinkActive="active">活动通知</li>
                    <li routerLink="system" routerLinkActive="active">系统通知</li>
                    <li routerLink="platform" routerLinkActive="active">平台公告</li>
                </ul>
            </nav>
            <main class="main">
                <router-outlet></router-outlet>
            </main>
        </div>
    `,
    styles:[`
        .newsNav{
            height: .9rem;
            line-height: .9rem;
            background: #fff;
        }
        .newsNav ul{
            display: flex;
        }
        .newsNav ul li{
            flex: 1;
            text-align: center;
            color: #666;
            font-size: .3rem;
        }
        .newsNav ul li.active{
            color: #d7000f;
            position:relative;
        }
        .newsNav ul li.active::after{
            content:"";
            position: absolute;
            width: 60%;
            height: 2px;
            bottom:0;
            left: 50%;
            margin-left: -30%;
            background: #d7000f;
        }
    `]
})
export class NewsComponent{

}