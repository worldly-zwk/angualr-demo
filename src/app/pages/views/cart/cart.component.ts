import { Component ,OnInit ,OnDestroy} from '@angular/core'
import { ActivatedRoute ,NavigationStart } from '@angular/router'

import { NavigationService } from '../../../core/navigation.service'

@Component({
    templateUrl: "./cart.component.html",
    styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit,OnDestroy{
    constructor( private route : ActivatedRoute , private navigation : NavigationService){ }
    ngOnInit(){
        this.navigation.sendMessage(true);
    }
    ngOnDestroy(){
        this.navigation.sendMessage(false);
    }
}