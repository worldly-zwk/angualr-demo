import { Component ,OnChanges } from '@angular/core'

@Component({
    template:`
        <div>
            <h1></h1>
            <h2></h2>
        </div>
    `
})

export class PracticeComponent implements OnChanges{
    constructor(){ }
    ngOnChanges(changes){
        console.log(111)
    }
}