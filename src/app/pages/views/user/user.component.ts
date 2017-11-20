import { Component , ViewContainerRef , ViewChild ,OnInit ,HostListener ,Renderer , HostBinding ,Output , EventEmitter , ContentChild , TemplateRef ,OnDestroy ,ChangeDetectorRef} from '@angular/core'

import { NavigationService } from '../../../core/navigation.service'

@Component({
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit,OnDestroy{
    @HostListener("click") fn(){
        
    }
    constructor( private navigation : NavigationService){
        
    }
    ngOnInit(){
        this.navigation.sendMessage(true)
    }
    ngOnDestroy(){
        this.navigation.sendMessage(false)
    }
}