import { Directive , ElementRef , OnInit ,Input} from '@angular/core'

@Directive({
    selector: "[swiper]"
})

export class SwiperDirective implements OnInit{
    @Input() public config={};
    public swiper;
    constructor( private el : ElementRef){ }
    ngOnInit(){
        this.swiper=new Swiper(this.el.nativeElement,this.config)
    }
}