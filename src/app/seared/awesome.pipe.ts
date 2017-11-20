import { Pipe ,PipeTransform} from '@angular/core'

@Pipe({name:'awesome'})

export class awesomePipe implements PipeTransform{
    transform(phrase : string){
        return phrase ? 'Awesome ' + phrase : '';
    }
}