export class Id{
    private id:string;
    
    constructor( id?:string){
        this.id = id??""
    }

    value(){
        return this.id
    }
}