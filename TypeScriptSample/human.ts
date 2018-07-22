import { Organism } from './organism';

class Human extends Organism {
    public constructor(){
        super();
    }
    public SetHumanName(name:string){
        this.SetName(name);
    }
    public GetName():string{
        return this.GetOrganismName();
    }
}

export {
    Human
}