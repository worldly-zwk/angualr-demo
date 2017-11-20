import { Component ,OnInit } from '@angular/core'
import { NavigationStart } from '@angular/router'
import { NavigationService } from './core/navigation.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
    flay:boolean;
    constructor( public navigation : NavigationService){ }
    ngOnInit(){
        this.navigation.getMessage().subscribe(bool=>this.flay=bool.show)
    }
}
