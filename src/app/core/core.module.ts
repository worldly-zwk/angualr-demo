import {  ModuleWithProviders, NgModule, Optional, SkipSelf  } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TitleComponent } from './title.component'
import { NavigationService } from './navigation.service'
import { SwiperDirective } from './swiper.directive'
import { IscrollServer } from './iscroll.server'

@NgModule({
    imports: [CommonModule],
    exports: [
        TitleComponent,
        SwiperDirective
    ],
    providers:[
        NavigationService,
        IscrollServer
    ],
    declarations:[
        TitleComponent,
        SwiperDirective
    ]
})

export class CoreModule{ 
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}