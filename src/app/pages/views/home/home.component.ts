import { Component , OnInit , AfterViewInit ,Output ,OnDestroy} from '@angular/core'
import { Http } from '@angular/http'
import { ActivatedRoute } from '@angular/router'

import { NavigationService } from '../../../core/navigation.service'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit,OnDestroy{
    public bander;
    public channels;
    public cate;
    public floor;
    public products;
    public swiper;
    public config;
    constructor ( private http : Http , private route : ActivatedRoute , private navigation : NavigationService){ }
    ngOnInit(){
        this.route.data.subscribe(data=>{
            this.bander=data.bander.bander;
            this.channels=data.bander.channels;
            this.cate=data.bander.cate;
            this.floor=data.bander.floor;
            this.products=data.bander.product;
        })
        this.navigation.sendMessage(true);
        this.config={
            autoplay: 4000,
            loop: true,
            pagination: '.swiper-pagination1',
            bulletClass: 'home-bullet',
            bulletActiveClass: 'home-bullet-active',
            observer:true,
            observeParents:true
        };
    }
    ngOnDestroy(){
        this.navigation.sendMessage(false)
    }
}