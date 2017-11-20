import { Pipe , PipeTransform} from '@angular/core'

@Pipe({
    name:"listFilter"
})

export class ClassifyPipe implements PipeTransform{
    constructor(){ }
    transform(data,params){
        var res;
        if(!params) return data[0].list; 
        for(var i=0;i<data.length;i++){
            if(data[i].name==params){
                res=data[i].list;
            }
        }
        return res;
    }
}