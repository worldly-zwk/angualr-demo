import { Component ,OnInit} from '@angular/core'

@Component({
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.sass']
})

export class ProductComponent implements OnInit{
    public picture;
    public config;
    constructor(){}
    ngOnInit(){
        this.picture=[
            {src:"http://oss.citic-mall.com/a1262906-3014-4eff-b9fe-e5b48fe450f9"},
            {src:"http://oss.citic-mall.com/a5c632f6-4e47-49a0-8428-2d2d674ae2a1"},
            {src:"http://oss.citic-mall.com/6bee4dbb-1e4e-4be7-9a0e-4c726fb55f4b"},
            {src:"http://oss.citic-mall.com/463ed350-c0ca-493c-bbe5-666c371b4c1b"},
            {src:"http://oss.citic-mall.com/2c4b1abd-946a-4bd6-9d57-fefcab97af42"}
        ];
        this.config={
            autoplay: 4000,
            loop: true,
            pagination: '.swiper-pagination1',
            bulletClass: 'product-bullet',
            bulletActiveClass: 'product-bullet-active',
            observer:true,
            observeParents:true
        };
    }
}