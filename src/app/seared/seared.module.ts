import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { awesomePipe } from './awesome.pipe'
import { HighlightDirective } from './highlight.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [awesomePipe,HighlightDirective],
    exports: [awesomePipe,HighlightDirective,CommonModule,FormsModule]
})

export class SearedModule{ }