import { Component ,OnInit ,Input ,ElementRef ,AfterViewInit} from '@angular/core'

import { IscrollServer } from '../../../core/iscroll.server'

@Component({
    selector: "app-list",
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit,AfterViewInit{
    @Input() data;
    myScroll:any;
    constructor(private el : ElementRef ,private iscroll : IscrollServer){ }
    ngOnInit(){
        // this.iscroll.getData().subscribe(res=>{
        //     console.log(res,this.data)
        //     this.data=this.data.concat(res);
        //     this.iscroll.refresh();
        // })
    }
    ngAfterViewInit(){
        // this.iscroll.create(this.el.nativeElement)
    }
}