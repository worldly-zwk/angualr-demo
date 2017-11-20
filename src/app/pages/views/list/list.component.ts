import { Component ,Renderer ,ElementRef ,OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './list.component.html',
    styleUrls:['./list.component.sass']
})

export class ListComponent implements OnInit{
    public productList;
    constructor(private route : ActivatedRoute){ }
    ngOnInit(){
        this.route.data.subscribe(res=>this.productList=res.list)
        $(".top-nav li").on("click",function(){
            $(this).addClass("active").siblings().removeClass("active")
        })
    }

}
